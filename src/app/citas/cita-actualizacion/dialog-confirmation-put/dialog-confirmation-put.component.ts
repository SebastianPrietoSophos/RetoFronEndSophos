import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppointmentsModel } from 'src/app/core/models/appointments.model';
import { appointmentsPut } from 'src/app/core/services/appointmentPut.service';


@Component({
  selector: 'app-dialog-confirmation-put',
  templateUrl: './dialog-confirmation-put.component.html',
  styleUrls: ['./dialog-confirmation-put.component.css']
})
export class DialogConfirmationPutComponent {
  public updateAppointment : AppointmentsModel = {
                                                date:"",
                                                hour:"",
                                                tests:{id:0},
                                                affiliates:{id:0}};

  constructor(private service : appointmentsPut,
              @Inject(MAT_DIALOG_DATA) public data: {id: number,
                                                    fecha: string,
                                                    hora: string,
                                                    idAfiliado: number,
                                                    idPrueba: number}) {}

  put(id: number, fecha: string, hora: string, idAfiliado: number, idPrueba: number ){
    this.updateAppointment.id = id,
    this.updateAppointment.date = fecha,
    this.updateAppointment.hour = hora,
    this.updateAppointment.affiliates.id = idAfiliado,
    this.updateAppointment.tests.id = idPrueba,
    this.service.putAppointment(this.updateAppointment)
  }
                              

}
