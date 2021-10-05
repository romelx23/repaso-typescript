"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.iroman = void 0;
var PersonaNormal = /** @class */ (function () {
    function PersonaNormal(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }
    return PersonaNormal;
}());
var Heroe = /** @class */ (function (_super) {
    __extends(Heroe, _super);
    // public alterEgo:string;
    // public edad:number;
    // public nombreReal:string;
    // imprimirNombre(){
    //     return this.alterEgo+''+this.nombreReal;
    // }
    function Heroe(alterEgo, edad, nombreReal) {
        var _this = _super.call(this, nombreReal, 'New York USA') || this;
        _this.alterEgo = alterEgo;
        _this.edad = edad;
        _this.nombreReal = nombreReal;
        return _this;
    }
    return Heroe;
}(PersonaNormal));
exports.iroman = new Heroe('Iroman', 45, 'Tony');
// const spierman=new Heroe()
console.log(exports.iroman);
//# sourceMappingURL=08-clases.js.map