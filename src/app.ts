import { tiposBasicos } from './ejercicios/01-tipos-basicos';
import { arrObject } from './ejercicios/02-arr-obj-inter';
import { funciones } from './ejercicios/03-funciones';
import { Tarea } from './ejercicios/04-tarea';
// console.log('hola jean¡¡¡¡¡¡¡¡¡')

// tiposBasicos()

// arrObject()

// funciones()

// Tarea()

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

console.log('El volumen actual es de: ',volumen);
console.log('El segundo actual es de: ',segundo);
console.log('El cancion actual es de: ',cancion);
console.log('El autor actual es: ',autorDetalle);