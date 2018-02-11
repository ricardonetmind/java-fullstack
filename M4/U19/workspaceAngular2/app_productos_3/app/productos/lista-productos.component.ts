import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
@Component({
    selector: 'lista-productos',
    templateUrl: 'app/productos/lista-productos.component.html'
})
export class ListaProductosComponent {
    imageWidth: number = 50;
    imageMargin: number = 3;
    imageVisible: boolean = false;
    filtro: string = "cart";
    productos: any[] = [
          {
            "Producto": "Leaf Rake",
            "Codigo": "GDN-0011",
            "Disponible": "March 19, 2016",
            "Precio": 19.95,
            "Valoracion": 3.0,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "Producto": "Garden Cart",
            "Codigo": "GDN-0023",
            "Disponible": "March 21, 2016",
            "Precio": 32.99,
            "Valoracion": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }];
        mostrarImagen(): void {
            this.imageVisible = !this.imageVisible;
        }
}

