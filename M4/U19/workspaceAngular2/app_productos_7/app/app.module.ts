import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { AppComponent }  from './app.component';
import { ListaProductosComponent } 
   from './productos/lista-productos.component';
import { FiltroProductosPipe } 
   from './productos/lista-productos.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, ListaProductosComponent, 
                  FiltroProductosPipe, StarComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
