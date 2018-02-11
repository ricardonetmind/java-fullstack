import { Injectable } from "@angular/core";
import { IProducto } from "./producto";

@Injectable()
export class ServicioProductos {
    leerProductos(): IProducto[] {
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
    }
}