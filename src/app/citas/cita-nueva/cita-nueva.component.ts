import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  form : FormGroup;
  
  constructor(private service : appointmentsPost , private serviceGetData: affiliatesGet,
    private serviceTests: testsGet, private formBuilder: FormBuilder){
      this.form = this.formBuilder.group({
        fechaSeleccionada: ['', Validators.required],
        selectedHour: ['', Validators.required],
        idSeleccionadoAfiliado: ['', Validators.required],
        idSeleccionadoPrueba: ['', Validators.required]
      });
    }
  
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
    dateValue : string = '';
    public newAppointment : AppointmentsModel = {
                                                  date:"12-12-2012",
                                                  hour:"12:12:00",
                                                  tests:{id:1},
                                                  affiliates:{id:1}};
    
    post(fecha: string ,hora: string, id_aff: any, id_test: any){
      console.log(fecha, hora, id_aff, id_test);
      this.newAppointment.date= fecha;
      this.newAppointment.hour= hora;
      this.newAppointment.tests.id= id_aff;
      this.newAppointment.affiliates.id= id_test;
      this.service.postAppointment(this.newAppointment);
    }

}
