import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { affiliateDelete } from 'src/app/core/services/affliateDelete.service';

@Component({
  selector: 'app-dialog-delete-affiliate',
  templateUrl: './dialog-delete-affiliate.component.html',
  styleUrls: ['./dialog-delete-affiliate.component.css']
})
export class DialogDeleteAffiliateComponent {

  constructor(
    private serviceDelete: affiliateDelete,
    @Inject(MAT_DIALOG_DATA) public data: {id: number}
  ){}
    
   borrar(id : number){
   this.serviceDelete.deleteAffiliate(id);
  }

}
