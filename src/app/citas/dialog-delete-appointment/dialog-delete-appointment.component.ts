import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { appointmentsDelete } from 'src/app/core/services/appointmentDelete.service';

@Component({
  selector: 'app-dialog-delete-appointment',
  templateUrl: './dialog-delete-appointment.component.html',
  styleUrls: ['./dialog-delete-appointment.component.css']
})
export class DialogDeleteAppointmentComponent {
  constructor(
    private serviceDelete: appointmentsDelete,
    @Inject(MAT_DIALOG_DATA) public data: {id: number}
  ){}
    
   borrar(id : number){
   this.serviceDelete.deleteAppointment(id);
  }
}
