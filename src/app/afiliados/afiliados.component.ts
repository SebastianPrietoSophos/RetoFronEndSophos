import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AffiliatesModel } from '../core/models/affiliates.model';
import { affiliatesGet } from '../core/services/affiliates.servicce';
import { idShare } from '../core/services/idShare.service';
import { DialogDeleteAffiliateComponent } from './dialog-delete-affiliate/dialog-delete-affiliate.component';

@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css']
})
export class AfiliadosComponent{
  public dataSource : Array<AffiliatesModel> = [];
  displayedColumns = ['ID', 'Nombre', 'Edad', 'eMail', 'Opciones'];

  constructor(public service : affiliatesGet, private serviceId: idShare,
                    public dialog: MatDialog){}



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
  borrar (id : number){
    this.dialog.open(DialogDeleteAffiliateComponent,{data:{id: this.dataSource[id].id}});
  }
}
