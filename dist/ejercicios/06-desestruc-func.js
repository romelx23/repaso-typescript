"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desesArgu = exports.calculaISV = void 0;
function calculaISV(productos) {
    var total = 0;
    productos.forEach(function (_a) {
        var precio = _a.precio;
        total += precio;
    });
    return [total, total * 0.15];
}
exports.calculaISV = calculaISV;
var desesArgu = function () {
    var telefono = {
        desc: 'Nokkia A1',
        precio: 150
    };
    var Ipad = {
        desc: 'Ipad Air',
        precio: 350
    };
    var articulos = [telefono, Ipad];
    var _a = calculaISV(articulos), total = _a[0], isv = _a[1];
    console.log('Total: ', total);
    console.log('ISV: ', isv);
};
exports.desesArgu = desesArgu;
//# sourceMappingURL=06-desestruc-func.js.map