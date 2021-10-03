"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funciones = void 0;
var funciones = function () {
    var sumar = function (a, b) {
        return a + b;
    };
    function sumarNormal(a, b) {
        return a + b;
    }
    function multiplicar(numero, otroNumero, base) {
        if (base === void 0) { base = 2; }
        return numero * base;
    }
    var resultado = sumar(5, 9);
    var resultado2 = multiplicar(5, 0, 10);
    function curar(personaje, puntosVida) {
        personaje.pv += puntosVida;
        console.log(personaje);
    }
    var nuevoPersonaje = {
        nombre: "Strider",
        pv: 50,
        mostrarHp: function () {
            console.log("puntos de vida", this.pv);
        },
    };
    curar(nuevoPersonaje, 100);
    nuevoPersonaje.mostrarHp();
};
exports.funciones = funciones;
//# sourceMappingURL=03-funciones.js.map