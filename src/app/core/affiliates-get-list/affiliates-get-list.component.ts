import { Component } from '@angular/core';
import { Appointments } from '../models/affiliatesGetList.model';
import { affiliateGetList } from '../services/affiliateGetList.service';

@Component({
  selector: 'app-affiliates-get-list',
  templateUrl: './affiliates-get-list.component.html',
  styleUrls: ['./affiliates-get-list.component.css']
})
export class AffiliatesGetListComponent {

  public bodyArray: Array<Appointments> = [];

  constructor(public service: affiliateGetList){}

  getList(){
    this.service.getList().subscribe(resp => {this.bodyArray=resp
      console.log(this.bodyArray)
      });
  }

  ngOnInit(): void{
    
  }

}
