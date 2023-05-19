import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AffiliatesModel } from 'src/app/core/models/affiliates.model';
import { affiliatePut } from 'src/app/core/services/affiliatePutService';

@Component({
  selector: 'app-dialog-confirmation-put-affiliate',
  templateUrl: './dialog-confirmation-put-affiliate.component.html',
  styleUrls: ['./dialog-confirmation-put-affiliate.component.css']
})
export class DialogConfirmationPutAffiliateComponent {
  
  public updateAffiliate : AffiliatesModel = {
                                                nombre:"",
                                                age:0,
                                                mail:''};

constructor(private service : affiliatePut,
@Inject(MAT_DIALOG_DATA) public data: {id: number,
                                      nombre: string,
                                      edad: number,
                                      mail: string}) {}

put(id: number, nombre: string, edad: number, mail: string ){
this.updateAffiliate.id = id,
this.updateAffiliate.nombre = nombre,
this.updateAffiliate.age = edad,
this.updateAffiliate.mail = mail
this.service.putAffiliate(this.updateAffiliate)
}

}
