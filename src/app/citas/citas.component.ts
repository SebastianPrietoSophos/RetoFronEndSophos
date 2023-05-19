import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { appointmentsGet } from 'src/app/core/services/appointments.service';
import { AppointmentsModel } from '../core/models/appointments.model';
import { appointmentsDelete } from '../core/services/appointmentDelete.service';
import { idShare } from '../core/services/idShare.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent  implements OnInit{
  public dataSource : Array<AppointmentsModel> = [];
  displayedColumns = ['ID', 'Fecha', 'Hora', 'Id Test', 'Id Afiliado', 'Opciones'];

  constructor(public service : appointmentsGet, private route: ActivatedRoute,
              private serviceDelete: appointmentsDelete,
               private router: Router, public dialog: MatDialog,
               public serviceId : idShare){}

  ngOnInit(): void {
    this.service.getList().subscribe(resp=>{this.dataSource=resp;
                                            console.log(this.dataSource)
                                            }
                                    );
    
  }

  actualizar(id : number){
    console.log("el id selecionado es "+ this.dataSource[id].id);
    this.serviceId.updateId(this.dataSource[id].id!);

  }
  borrar(id : number){
    console.log("el id selecionado es "+ this.dataSource[id].id);
    this.serviceDelete.deleteAppointment(this.dataSource[id].id!);
  }

} 
