import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
@Component({
    selector: 'lista-productos',
    templateUrl: 'app/productos/lista-productos.component.html'
})
export class ListaProductosComponent {
    productos: any[] = [
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

