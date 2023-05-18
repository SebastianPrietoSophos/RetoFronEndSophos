import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { appointmentsGet } from 'src/app/core/services/appointments.service';
import { AppointmentsModel } from '../core/models/appointments.model';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent  implements OnInit{
  public dataSource : Array<AppointmentsModel> = [];
  displayedColumns = ['ID', 'Fecha', 'Hora', 'Id Test', 'Id Afiliado', 'Opciones'];

  constructor(public service : appointmentsGet, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.service.getList().subscribe(resp=>{this.dataSource=resp;
                                            console.log(this.dataSource)
                                            }
                                    );
    
  }
  
  nuevo(){
    this.router.navigate(['nuevo'], {relativeTo:this.route});
  }


}
