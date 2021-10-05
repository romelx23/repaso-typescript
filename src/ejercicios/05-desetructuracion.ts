
export const desesObjecto = () => {
    interface Reproductor{
        volumen:number;
        segundo:number;
        cancion:string;
        detalles:Detalles;
    }
    
    interface Detalles{
        autor:string;
        anio:number;
    }
    
    const reporductor:Reproductor={
        volumen:90,
        segundo:36,
        cancion:'TRUE BLUE',
        detalles:{
            autor:'Ed sheran',
            anio:2015
        }
    }
    
    const {volumen,segundo,cancion,detalles:{autor:autorDetalle}}=reporductor;
    // const {autor}=detalles
    
    // console.log('El volumen actual es de: ',volumen);
    // console.log('El segundo actual es de: ',segundo);
    // console.log('El cancion actual es de: ',cancion);
    // console.log('El autor actual es: ',autorDetalle);

    // Dessetructuracion Arreglos
    const dbz:string[]=['Goku','Vegeta','Trunks'];
    const [p1,p2,p3]=dbz;

    console.log('Personaje1: ', p1);
    console.log('Personaje2: ', p2);
    console.log('Personaje3: ', p3);
    
}
