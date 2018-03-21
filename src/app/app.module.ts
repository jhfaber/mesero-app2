import { PlatoService } from './_service/plato.service';
import { ComboBoxDirective } from './_directive/combobox.directive';
import { PlatoEdicionComponent } from './plato/plato-edicion/plato-edicion.component';
import { PlatoDetalleComponent } from './plato/plato-detalle/plato-detalle.component';
import { PlatoInicioComponent } from './plato/plato-inicio/plato-inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { PlatoComponent } from './plato/plato.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { ConsultaComponent } from './consulta/consulta.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { PlatoListaComponent } from './plato/plato-lista/plato-lista.component';


import {DataTableModule} from "angular2-datatable";

@NgModule({
  declarations: [
    AppComponent,
    PlatoComponent,    
    ConsultaComponent,
    ConsumoComponent,
    FooterComponent,
    HeaderComponent,
    ComponentesComponent,
    PlatoInicioComponent,
    PlatoDetalleComponent,
    PlatoEdicionComponent,
    PlatoListaComponent,
    ComboBoxDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule
  ],
  providers: [ PlatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
