import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { IProducto } from './Producto';
// import { StarComponent } from '../shared/StarComponent';

@Component({
    selector: 'lista-productos',
    templateUrl: 'app/productos/lista-productos.component.html',
    styleUrls: ['app/productos/lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
    imageWidth: number = 50;
    imageMargin: number = 3;
    imageVisible: boolean = false;
    filtro: string = "cart";
    productos: IProducto[] = [
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
        mostrarImagen(): void {
            this.imageVisible = !this.imageVisible;
        }
        ngOnInit() {
            console.log("Ejecutando OnInit");
        }
        onRatingClicked(message: string): void {
            alert(message);
        }
}

