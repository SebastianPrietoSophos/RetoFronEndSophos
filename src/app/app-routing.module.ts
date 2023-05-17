import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfiliadosComponent } from './afiliados/afiliados.component';
import { CitasComponent } from './citas/citas.component';
import { HomeComponent } from './home/home.component';
import { PruebasComponent } from './pruebas/pruebas.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'Citas', component: CitasComponent},
  { path: 'Pruebas', component: PruebasComponent},
  { path: 'Afiliados', component: AfiliadosComponent},
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
