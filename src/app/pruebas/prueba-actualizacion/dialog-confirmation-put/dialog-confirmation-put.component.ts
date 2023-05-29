import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TestsModel } from 'src/app/core/models/tests.model';
import { testPut } from  'src/app/core/services/testPut.service'

@Component({
  selector: 'app-dialog-confirmation-put',
  templateUrl: './dialog-confirmation-put.component.html',
  styleUrls: ['./dialog-confirmation-put.component.css']
})

export class DialogConfirmationPutPruebaComponent {
  
  public updateTest : TestsModel = { nombre:"",
                                     description:""};

  constructor(private service : testPut,
              @Inject(MAT_DIALOG_DATA) public data: {id: number,
                                                    nombre: string,
                                                    description: string}) {}

  put(id: number, nombre: string, descripcion: string ){
    this.updateTest.id = id,
    this.updateTest.nombre = nombre,
    this.updateTest.description = descripcion,
    this.service.putTest(this.updateTest)
  }
                              

}
