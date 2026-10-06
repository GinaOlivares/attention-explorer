import katex from 'katex';
export function Equation({tex}:{tex:string}){return <div className="equation" dangerouslySetInnerHTML={{__html:katex.renderToString(tex,{throwOnError:false,displayMode:true})}}/>}
