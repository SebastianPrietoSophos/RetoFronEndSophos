import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form : FormGroup;

  constructor(private service : testPost, private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      nombre : ['', Validators.required],
      descripcion : ['', Validators.required]
    });
  }
  
  post(nombre: HTMLInputElement, descripcion: HTMLInputElement){
    this.newTest.nombre= nombre.value;
    this.newTest.description= descripcion.value;
    this.service.postAffiliate(this.newTest);
  }

}
