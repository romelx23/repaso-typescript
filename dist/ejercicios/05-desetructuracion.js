"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desesObjecto = void 0;
var desesObjecto = function () {
    var reporductor = {
        volumen: 90,
        segundo: 36,
        cancion: 'TRUE BLUE',
        detalles: {
            autor: 'Ed sheran',
            anio: 2015
        }
    };
    var volumen = reporductor.volumen, segundo = reporductor.segundo, cancion = reporductor.cancion, autorDetalle = reporductor.detalles.autor;
    // const {autor}=detalles
    // console.log('El volumen actual es de: ',volumen);
    // console.log('El segundo actual es de: ',segundo);
    // console.log('El cancion actual es de: ',cancion);
    // console.log('El autor actual es: ',autorDetalle);
    // Dessetructuracion Arreglos
    var dbz = ['Goku', 'Vegeta', 'Trunks'];
    var p1 = dbz[0], p2 = dbz[1], p3 = dbz[2];
    console.log('Personaje1: ', p1);
    console.log('Personaje2: ', p2);
    console.log('Personaje3: ', p3);
};
exports.desesObjecto = desesObjecto;
//# sourceMappingURL=05-desetructuracion.js.map