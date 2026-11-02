export async function getCoreWasmBlobURL(){
  const names=['./core.part.00','./core.part.01'];
  const chunks=[];
  for(const n of names){const r=await fetch(new URL(n,import.meta.url));if(!r.ok)throw new Error('Missing media engine part '+n);chunks.push(await r.arrayBuffer());}
  return URL.createObjectURL(new Blob(chunks,{type:'application/wasm'}));
}
