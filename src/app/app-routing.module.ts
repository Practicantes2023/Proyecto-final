import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { Nuevo2Component } from './components/nuevo2/nuevo2.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { DatosComponent } from './components/datos/datos.component';

const routes: Routes = [
  { path: 'nuevo', component: NuevoComponent },
  { path: 'nuevo2', component: Nuevo2Component },
  { path: 'personaje', component: PersonajesComponent },
  { path: 'datos', component: DatosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
