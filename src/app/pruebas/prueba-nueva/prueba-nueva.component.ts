import { Component } from '@angular/core';
import { TestsModel } from 'src/app/core/models/tests.model';
import { testPost } from 'src/app/core/services/testPost.service';

@Component({
  selector: 'app-prueba-nueva',
  templateUrl: './prueba-nueva.component.html',
  styleUrls: ['./prueba-nueva.component.css']
})
export class PruebaNuevaComponent {
  nombreValue : string = '';
  descripcionValue : string = '';
  public newTest: TestsModel = {
                                      nombre:"",
                                      description:""
                                     }
  constructor(private service : testPost){}
  
  post(nombre: HTMLInputElement, descripcion: HTMLInputElement){
    this.newTest.nombre= nombre.value;
    this.newTest.description= descripcion.value;
    this.service.postAffiliate(this.newTest);
  }

}
