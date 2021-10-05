const queTipoSoy=<T>(argumento:T)=>{
    return argumento
}


const soyString=queTipoSoy('hola mundo');
const soyNumero=queTipoSoy(100);
const soyArreglo=queTipoSoy([1,2,3,4,5,6]);

const soyExplicito=queTipoSoy<number>(100);