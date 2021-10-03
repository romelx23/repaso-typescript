export const Tarea = () => {
    interface SuperHeroe{
        nombre:string;
        edad:number;
        direccion:HeroeDireccion
        mostrarDireccion:()=>string
    }
    interface HeroeDireccion{
        calle:string;
        pais:string;
        ciudad:string;
    }
    
    const superHeroe:SuperHeroe={
        nombre:'Spiderman',
        edad:30,
        direccion:{
            calle:'MAIN St',
            pais:'USA',
            ciudad:'NY'
        },
        mostrarDireccion(){
            return this.nombre+', '+ this.direccion.ciudad+', '+this.direccion.pais
        }
    }
    
    const direccion=superHeroe.mostrarDireccion();
    console.log(direccion)
    
}
