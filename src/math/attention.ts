export type Matrix = number[][];
export const dot=(a:number[],b:number[])=>{if(a.length!==b.length)throw Error('Dimensiones incompatibles');return a.reduce((s,v,i)=>s+v*b[i],0)};
export const transpose=(a:Matrix):Matrix=>a[0].map((_,j)=>a.map(r=>r[j]));
export const matMul=(a:Matrix,b:Matrix):Matrix=>{if(a[0].length!==b.length)throw Error('Dimensiones incompatibles');return a.map(r=>transpose(b).map(c=>dot(r,c)))};
export const softmax=(v:number[])=>{const max=Math.max(...v),e=v.map(x=>Math.exp(x-max)),sum=e.reduce((a,b)=>a+b,0);return e.map(x=>x/sum)};
export const rowSoftmax=(a:Matrix)=>a.map(softmax);
export const computeQKV=(X:Matrix,WQ:Matrix,WK:Matrix,WV:Matrix)=>({Q:matMul(X,WQ),K:matMul(X,WK),V:matMul(X,WV)});
export const computeScores=(Q:Matrix,K:Matrix)=>matMul(Q,transpose(K));
export const computeScaledScores=(s:Matrix,dk:number)=>s.map(r=>r.map(v=>v/Math.sqrt(dk)));
export const computeAttention=rowSoftmax;
export const computeOutput=matMul;
export const layernorm=(a:Matrix)=>a.map(r=>{const mean=r.reduce((a,b)=>a+b)/r.length,variance=r.reduce((s,v)=>s+(v-mean)**2,0)/r.length;return r.map(v=>(v-mean)/Math.sqrt(variance+1e-5))});
export function computeSelfAttention(X:Matrix,WQ:Matrix,WK:Matrix,WV:Matrix,scaling=true){const {Q,K,V}=computeQKV(X,WQ,WK,WV),scores=computeScores(Q,K),scaledScores=scaling?computeScaledScores(scores,Q[0].length):scores,attention=computeAttention(scaledScores),Z=computeOutput(attention,V),R=X.map((r,i)=>r.map((v,j)=>v+Z[i][j])),H=layernorm(R);return {Q,K,V,scores,scaledScores,attention,Z,R,H};}
export function validate(a:ReturnType<typeof computeSelfAttention>){return Object.values(a).every(m=>m.every(r=>r.every(Number.isFinite)))&&a.attention.every(r=>Math.abs(r.reduce((x,y)=>x+y,0)-1)<1e-10)&&a.Z.every((r,i)=>r.every((v,j)=>Math.abs(v-dot(a.attention[i],a.V.map(r=>r[j])))<1e-10));}
