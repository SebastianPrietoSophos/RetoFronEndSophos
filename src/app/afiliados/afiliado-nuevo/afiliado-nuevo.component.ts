import { Component } from '@angular/core';
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
constructor(private service : affiliatePost){}

post(nombre: HTMLInputElement, edad: any, mail: HTMLInputElement){
  this.newAffiliate.nombre= nombre.value;
  this.newAffiliate.age= edad.valueAsNumber;
  this.newAffiliate.mail= mail.value;
  this.service.postAffiliate(this.newAffiliate);
  }

}
