import { Component, OnInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { AffiliatesModel } from 'src/app/core/models/affiliates.model';
import { Affiliates, Appointments } from 'src/app/core/models/affiliatesGetList.model';
import { AppointmentsModel } from 'src/app/core/models/appointments.model';
import { TestsModel } from 'src/app/core/models/tests.model';
import { affiliatesGet } from 'src/app/core/services/affiliates.servicce';
import { appointmentsPost } from 'src/app/core/services/appointmentPost.service';
import { appointmentsGet } from 'src/app/core/services/appointments.service';
import { testsGet } from 'src/app/core/services/tests.service';

@Component({
  selector: 'app-cita-nueva',
  templateUrl: './cita-nueva.component.html',
  styleUrls: ['./cita-nueva.component.css']
})
export class CitaNuevaComponent implements OnInit{

  
  constructor(private service : appointmentsPost , private serviceGetData: affiliatesGet,
    private serviceTests: testsGet){}
  
  public dataSource : Array<AffiliatesModel> = [];
  public dataPruebas :  Array<TestsModel> = [];

  ngOnInit(): void {
    this.serviceGetData.getList().subscribe(resp=>this.dataSource=resp);
    this.serviceTests.getList().subscribe(resp=>this.dataPruebas=resp)
  }

  horasCitas : Array<string> = 
    ['08:00:00', '09:00:00','10:00:00','11:00:00','12:00:00','13:00:00','14:00:00','15:00:00',
    '16:00:00','17:00:00','18:00:00'];


    idAfiliado : number = 0;
    selectedHour : string = '';
    valueAffiliate : number = 1;
    valueTest : number = 1;
    public newAppointment : AppointmentsModel = {
                                                  date:"12-12-2012",
                                                  hour:"12:12:00",
                                                  tests:{id:1},
                                                  affiliates:{id:1}};
    
    post(fecha: HTMLInputElement, hora: any){
      console.log(fecha.value, hora.value, this.valueAffiliate, this.valueTest);
      this.newAppointment.date= fecha.value;
      this.newAppointment.hour= hora.value;
      this.newAppointment.tests.id= this.valueAffiliate;
      this.newAppointment.affiliates.id= this.valueTest;
      this.service.postAppointment(this.newAppointment);
    }

}
