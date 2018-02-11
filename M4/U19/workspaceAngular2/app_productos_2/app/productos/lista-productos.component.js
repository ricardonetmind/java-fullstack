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
        this.productos = [
            {
                "Producto": "Leaf Rake",
                "Codigo": "GDN-0011",
                "Disponible": "March 19, 2016",
                "Precio": 19.95,
                "Valoracion": 3.2
            },
            {
                "Producto": "Garden Cart",
                "Codigo": "GDN-0023",
                "Disponible": "March 21, 2016",
                "Precio": 32.99,
                "Valoracion": 4.2,
            }];
    }
    ListaProductosComponent = __decorate([
        core_1.Component({
            selector: 'lista-productos',
            templateUrl: 'app/productos/lista-productos.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ListaProductosComponent);
    return ListaProductosComponent;
}());
exports.ListaProductosComponent = ListaProductosComponent;
//# sourceMappingURL=lista-productos.component.js.map