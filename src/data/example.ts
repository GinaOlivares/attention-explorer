export const example = {sentence:'El gato come pescado',tokens:['El','gato','come','pescado'],tokenIds:[17,42,81,103],X:[[1,0],[1,1],[0,1],[0,2]],WQ:[[1,0],[1,1]],WK:[[1,1],[0,1]],WV:[[1,0],[1,2]]};
export type Inputs = Pick<typeof example,'X'|'WQ'|'WK'|'WV'>;
export const defaults = (): Inputs => structuredClone({X:example.X,WQ:example.WQ,WK:example.WK,WV:example.WV});
