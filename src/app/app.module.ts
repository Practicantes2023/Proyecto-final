import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { Nuevo2Component } from './components/nuevo2/nuevo2.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajesService } from './services/personajes.service';
import { DatosComponent } from './components/datos/datos.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Nuevo3Component } from './components/nuevo3/nuevo3.component';




@NgModule({
  declarations: [
    AppComponent,  
    NuevoComponent, Nuevo2Component, PersonajesComponent, DatosComponent, Nuevo3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxDatatableModule  
  ],
  providers: [
    PersonajesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
