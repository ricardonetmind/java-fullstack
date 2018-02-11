"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ServicioProductos = (function () {
    function ServicioProductos() {
    }
    ServicioProductos.prototype.leerProductos = function () {
        return [
            {
                "IdProducto": 1,
                "Producto": "Leaf Rake",
                "Codigo": "GDN-0011",
                "Disponible": "March 19, 2016",
                "Descripcion": "Escobilla para desatascar el LHC",
                "Precio": 19.95,
                "Valoracion": 3.0,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "IdProducto": 2,
                "Producto": "Garden Cart",
                "Codigo": "GDN-0023",
                "Disponible": "March 21, 2016",
                "Descripcion": "Carretilla mono-rueda y bi-manillar",
                "Precio": 32.99,
                "Valoracion": 4.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "IdProducto": 5,
                "Producto": "Hammer",
                "Codigo": "TBX-0048",
                "Disponible": "May 21, 2016",
                "Descripcion": "Curved claw steel hammer",
                "Precio": 8.9,
                "Valoracion": 4.8,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            }];
    };
    ServicioProductos = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ServicioProductos);
    return ServicioProductos;
}());
exports.ServicioProductos = ServicioProductos;
//# sourceMappingURL=productos.service.js.map