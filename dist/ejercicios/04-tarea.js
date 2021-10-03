"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
var Tarea = function () {
    var superHeroe = {
        nombre: 'Spiderman',
        edad: 30,
        direccion: {
            calle: 'MAIN St',
            pais: 'USA',
            ciudad: 'NY'
        },
        mostrarDireccion: function () {
            return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
        }
    };
    var direccion = superHeroe.mostrarDireccion();
    console.log(direccion);
};
exports.Tarea = Tarea;
//# sourceMappingURL=04-tarea.js.map