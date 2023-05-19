import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AffiliatesGetListComponent } from './core/affiliates-get-list/affiliates-get-list.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';



import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import { RouterModule, Routes } from '@angular/router';


import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from './home/home.component';
import { DatePickerComponent } from './home/home.components/date-picker/date-picker.component';
import { MatNativeDateModule } from '@angular/material/core';
import { IdPickerComponent } from './home/home.components/id-picker/id-picker.component';
import { FormsModule } from '@angular/forms';
import { MY_FORMATS } from './environments/my_date_format';
import { TablaHomeComponent } from './home/home.components/tabla-home/tabla-home.component';
import { CitasComponent } from './citas/citas.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { AfiliadosComponent } from './afiliados/afiliados.component';
import { CitaNuevaComponent } from './citas/cita-nueva/cita-nueva.component';
import { AfiliadoNuevoComponent } from './afiliados/afiliado-nuevo/afiliado-nuevo.component';
import { PruebaNuevaComponent } from './pruebas/prueba-nueva/prueba-nueva.component';
import { appointmentsPost } from './core/services/appointmentPost.service';
import { CitaActualizacionComponent } from './citas/cita-actualizacion/cita-actualizacion.component';
import { DialogConfirmationPutComponent } from './citas/cita-actualizacion/dialog-confirmation-put/dialog-confirmation-put.component';
import { PruebaActualizacionComponent } from './pruebas/prueba-actualizacion/prueba-actualizacion.component';
import { DialogConfirmationPutPruebaComponent } from './pruebas/prueba-actualizacion/dialog-confirmation-put/dialog-confirmation-put.component';
import { AfiliadoActualizacionComponent } from './afiliados/afiliado-actualizacion/afiliado-actualizacion.component';
import { DialogConfirmationPutAffiliateComponent } from './afiliados/afiliado-actualizacion/dialog-confirmation-put-affiliate/dialog-confirmation-put-affiliate.component';
import { DialogDeleteAppointmentComponent } from './citas/dialog-delete-appointment/dialog-delete-appointment.component';
import { DialogDeleteAffiliateComponent } from './afiliados/dialog-delete-affiliate/dialog-delete-affiliate.component';
import { DialogDeleteTestComponent } from './pruebas/dialog-delete-test/dialog-delete-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AffiliatesGetListComponent,
    NavBarComponent,
    HomeComponent,
    DatePickerComponent,
    IdPickerComponent,
    TablaHomeComponent,
    CitasComponent,
    PruebasComponent,
    AfiliadosComponent,
    CitaNuevaComponent,
    AfiliadoNuevoComponent,
    PruebaNuevaComponent,
    CitaActualizacionComponent,
    DialogConfirmationPutComponent,
    PruebaActualizacionComponent,
    DialogConfirmationPutComponent,
    DialogConfirmationPutPruebaComponent,
    AfiliadoActualizacionComponent,
    DialogConfirmationPutAffiliateComponent,
    DialogDeleteAppointmentComponent,
    DialogDeleteAffiliateComponent,
    DialogDeleteTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    FormsModule,
    RouterModule,
    MatDividerModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [MatNativeDateModule, 
              {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
              {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
              appointmentsPost,
              appointmentsPost],
  bootstrap: [AppComponent]
})
export class AppModule { }
