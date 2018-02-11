import { Component } from '@angular/core';
import { ServicioProductos } from './productos/productos.service';

@Component({
  selector: 'gestion-productos',
  template: `
            <h1>{{tituloPagina}}</h1>
            <lista-productos></lista-productos>`,
  providers: [ ServicioProductos ]
})
export class AppComponent {
    tituloPagina: string = "Demo de Gestión de Productos";
 }

