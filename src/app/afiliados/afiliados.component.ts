import { Component } from '@angular/core';
import { AffiliatesModel } from '../core/models/affiliates.model';
import { affiliatesGet } from '../core/services/affiliates.servicce';

@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css']
})
export class AfiliadosComponent {
  public dataSource : Array<AffiliatesModel> = [];
  displayedColumns = ['ID', 'Nombre', 'Edad', 'eMail', 'Opciones'];

  constructor(public service : affiliatesGet){}

  ngOnInit(): void {
    this.service.getList().subscribe(resp=>{this.dataSource=resp;
                                            console.log(this.dataSource)
                                            }
                                    );
  }
}
