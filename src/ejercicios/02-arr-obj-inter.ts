export const arrObject = () => {
    const habilidades:string[] =['healing','bach','counter'];
console.log(habilidades)
interface Personaje{
    nombre:string,
    hp:number,
    habilidades:string[],
    puebloNatal?:string
}

const personaje:Personaje = {
    nombre:'Strider',
    hp:100,
    habilidades:['bash','counter','healing'],
    puebloNatal:'pueblo paleta'
}

console.table(personaje)
}
