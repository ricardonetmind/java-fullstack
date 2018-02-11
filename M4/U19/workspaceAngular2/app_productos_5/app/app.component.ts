import { Component } from '@angular/core';

@Component({
  selector: 'gestion-productos',
  template: `
            <h1>{{tituloPagina}}</h1>
            <lista-productos></lista-productos>`
  
})
export class AppComponent {
    tituloPagina: string = "Demo de Gestión de Productos";
 }

