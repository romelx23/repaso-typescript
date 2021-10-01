"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumar = void 0;
// console.log('hola jean¡¡¡¡¡¡¡¡¡')
// tiposBasicos()
// arrObject()
var sumar = function (a, b) {
    return a + b;
};
exports.sumar = sumar;
function sumarNormal(a, b) {
    return a + b;
}
function multiplicar(numero, otroNumero, base) {
    if (base === void 0) { base = 2; }
    return numero * base;
}
var resultado = (0, exports.sumar)(5, 9);
var resultado2 = multiplicar(5, 0, 10);
console.log(resultado2);
//# sourceMappingURL=app.js.map