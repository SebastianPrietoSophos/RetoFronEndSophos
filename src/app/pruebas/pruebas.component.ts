import { Component } from '@angular/core';
import { TestsModel } from '../core/models/tests.model';
import { idShare } from '../core/services/idShare.service';
import { testsGet } from '../core/services/tests.service';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {
  public dataSource : Array<TestsModel> = [];
  displayedColumns = ['ID', 'Nombre', 'Descripción', 'Opciones'];

  constructor(public service : testsGet, public serviceId : idShare){}

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
  }
}
