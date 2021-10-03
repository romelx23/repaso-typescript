export const funciones = () => {
  const sumar = (a: number, b: number): number => {
    return a + b;
  };

  function sumarNormal(a: number, b: number) {
    return a + b;
  }

  function multiplicar(numero: number, otroNumero?: number, base = 2) {
    return numero * base;
  }
  const resultado = sumar(5, 9);
  const resultado2 = multiplicar(5, 0, 10);
  // console.log(resultado2)

  interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
  }

  function curar(personaje: PersonajeLOR, puntosVida: number): void {
    personaje.pv += puntosVida;
    console.log(personaje);
  }

  const nuevoPersonaje: PersonajeLOR = {
    nombre: "Strider",
    pv: 50,
    mostrarHp() {
      console.log("puntos de vida", this.pv);
    },
  };

  curar(nuevoPersonaje, 100);
  nuevoPersonaje.mostrarHp();
};
