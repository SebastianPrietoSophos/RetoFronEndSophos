import { Component } from '@angular/core';
import { AppointmentsModelForPost } from 'src/app/core/models/appointments.model';
import { appointmentsPost } from 'src/app/core/services/appointmentPost.service';

@Component({
  selector: 'app-cita-nueva',
  templateUrl: './cita-nueva.component.html',
  styleUrls: ['./cita-nueva.component.css']
})
export class CitaNuevaComponent {

  horasCitas : Array<string> = 
    ['08:00:00', '09:00:00','10:00:00','11:00:00','12:00:00','13:00:00','14:00:00','15:00:00',
    '16:00:00','17:00:00','18:00:00'];
    
    selectedHour : string = '';
    valueAffiliate : number = 0;
    valueTest : number = 0;
    public newAppointment : AppointmentsModelForPost = {
                                                  date:"12-12-2012",
                                                  hour:"12:12:00",
                                                  tests:{id:1},
                                                  affiliates:{id:1}};
    constructor(private service : appointmentsPost){}
    
    post(fecha: HTMLInputElement, hora: any, idPrueba: HTMLInputElement, idAfiliado: HTMLInputElement){
      this.newAppointment.date= fecha.value;
      this.newAppointment.hour= hora.value;
      this.newAppointment.tests.id= idPrueba.valueAsNumber;
      this.newAppointment.affiliates.id= idAfiliado.valueAsNumber;
      this.service.postAppointment(this.newAppointment);
    }

}
