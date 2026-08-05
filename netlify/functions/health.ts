export default async function handler():Promise<Response>{return new Response(JSON.stringify({status:'ok',service:'docbit'}),{headers:{'content-type':'application/json'}})}
