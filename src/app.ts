import { tiposBasicos } from './ejercicios/01-tipos-basicos';
import { arrObject } from './ejercicios/02-arr-obj-inter';
// console.log('hola jean¡¡¡¡¡¡¡¡¡')

// tiposBasicos()

// arrObject()

export const sumar=(a:number,b:number):number=>{
    return a+b
}

function sumarNormal(a:number,b:number){
    return a+b
}

function multiplicar(numero:number,otroNumero?:number,base=2){
    return numero*base
}
const resultado=sumar(5,9);
const resultado2=multiplicar(5,0,10);
console.log(resultado2)