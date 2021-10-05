"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importExport = void 0;
var _06_desestruc_func_1 = require("./06-desestruc-func");
var importExport = function () {
    var carritoCompras = [
        {
            desc: 'Telefono1',
            precio: 100,
        },
        {
            desc: 'Telefono2',
            precio: 150,
        }
    ];
    var _a = (0, _06_desestruc_func_1.calculaISV)(carritoCompras), total = _a[0], isv = _a[1];
    console.log('Total: ', total);
    console.log('ISV: ', isv);
};
exports.importExport = importExport;
//# sourceMappingURL=07-import-export.js.map