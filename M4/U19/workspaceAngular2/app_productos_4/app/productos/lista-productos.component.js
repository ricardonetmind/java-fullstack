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
var core_1 = require('@angular/core');
var ListaProductosComponent = (function () {
    function ListaProductosComponent() {
        this.imageWidth = 50;
        this.imageMargin = 3;
        this.imageVisible = false;
        this.filtro = "cart";
        this.productos = [
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
            }];
    }
    ListaProductosComponent.prototype.mostrarImagen = function () {
        this.imageVisible = !this.imageVisible;
    };
    ListaProductosComponent.prototype.ngOnInit = function () {
        console.log("Ejecutando OnInit");
    };
    ListaProductosComponent = __decorate([
        core_1.Component({
            selector: 'lista-productos',
            templateUrl: 'app/productos/lista-productos.component.html',
            styleUrls: ['app/productos/lista-productos.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ListaProductosComponent);
    return ListaProductosComponent;
}());
exports.ListaProductosComponent = ListaProductosComponent;
//# sourceMappingURL=lista-productos.component.js.map