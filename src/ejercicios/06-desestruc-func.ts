export interface Producto{
    desc:string;
    precio:number;
}

export function calculaISV(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio
    })
    return [total,total*0.15];
}

export const desesArgu = () => {
    
    const telefono:Producto={
        desc:'Nokkia A1',
        precio:150
    }
    const Ipad:Producto={
        desc:'Ipad Air',
        precio:350
    }
    
    const articulos=[telefono,Ipad];
    
    const [total,isv]=calculaISV(articulos)
    console.log('Total: ',total)
    console.log('ISV: ',isv)
}