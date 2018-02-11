import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ListaProductosComponent } from './productos/lista-productos.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ListaProductosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
