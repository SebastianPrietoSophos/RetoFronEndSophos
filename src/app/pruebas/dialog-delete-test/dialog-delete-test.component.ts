import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { testDelete } from 'src/app/core/services/testDelete.service';

@Component({
  selector: 'app-dialog-delete-test',
  templateUrl: './dialog-delete-test.component.html',
  styleUrls: ['./dialog-delete-test.component.css']
})
export class DialogDeleteTestComponent {

  constructor(
    private serviceDelete: testDelete,
    @Inject(MAT_DIALOG_DATA) public data: {id: number}
  ){}
    
   borrar(id : number){
   this.serviceDelete.deleteTest(id);
  }
}
