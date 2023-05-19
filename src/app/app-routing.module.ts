import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfiliadoActualizacionComponent } from './afiliados/afiliado-actualizacion/afiliado-actualizacion.component';
import { AfiliadoNuevoComponent } from './afiliados/afiliado-nuevo/afiliado-nuevo.component';
import { AfiliadosComponent } from './afiliados/afiliados.component';
import { CitaActualizacionComponent } from './citas/cita-actualizacion/cita-actualizacion.component';
import { CitaNuevaComponent } from './citas/cita-nueva/cita-nueva.component';
import { CitasComponent } from './citas/citas.component';
import { HomeComponent } from './home/home.component';
import { PruebaActualizacionComponent } from './pruebas/prueba-actualizacion/prueba-actualizacion.component';
import { PruebaNuevaComponent } from './pruebas/prueba-nueva/prueba-nueva.component';
import { PruebasComponent } from './pruebas/pruebas.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'Citas', component: CitasComponent},
  { path: 'nuevaCita', component: CitaNuevaComponent},
  { path: 'actualizarCita', component: CitaActualizacionComponent},
  { path: 'Pruebas', component: PruebasComponent},
  { path: 'nuevaPrueba', component: PruebaNuevaComponent},
  { path: 'actualizarPrueba', component: PruebaActualizacionComponent},
  { path: 'Afiliados', component: AfiliadosComponent},
  { path: 'nuevoAfiliado', component: AfiliadoNuevoComponent},
  { path: 'actualizarAfiliado', component: AfiliadoActualizacionComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
