import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AffiliatesModel } from 'src/app/core/models/affiliates.model';
import { affiliatePost } from 'src/app/core/services/affiliatePost.service'

@Component({
  selector: 'app-afiliado-nuevo',
  templateUrl: './afiliado-nuevo.component.html',
  styleUrls: ['./afiliado-nuevo.component.css']
})
export class AfiliadoNuevoComponent {

  nombreValue : string = '';
  edadValue : number = 0;
  mailValue : string = '';

  public newAffiliate: AffiliatesModel = {
                                          nombre:"",
                                          age:0,
                                          mail:""
                                         }

form : FormGroup;

constructor(private service : affiliatePost, private formBuilder: FormBuilder){
  this.form = this.formBuilder.group({
    nombre : ['', Validators.required],
    edad : ['', Validators.required],
    correo : ['', [Validators.required, Validators.email]]
  })
}

post(nombre: HTMLInputElement, edad: any, mail: HTMLInputElement){
  this.newAffiliate.nombre= nombre.value;
  this.newAffiliate.age= edad.valueAsNumber;
  this.newAffiliate.mail= mail.value;
  this.service.postAffiliate(this.newAffiliate);
  }

}
