class PersonaNormal{
    constructor(
        public nombre:string,
        public direccion:string
    ){}
}

class Heroe extends PersonaNormal{
    // public alterEgo:string;
    // public edad:number;
    // public nombreReal:string;
    // imprimirNombre(){
    //     return this.alterEgo+''+this.nombreReal;
    // }
    constructor(
        public alterEgo:string,
        public edad:number,
        public nombreReal:string
    ){
        super(nombreReal,'New York USA');
    }
}

export const iroman=new Heroe('Iroman',45,'Tony')
// const spierman=new Heroe()
console.log(iroman)