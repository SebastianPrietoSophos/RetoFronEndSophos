import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { AffiliatesList } from 'src/app/core/models/affiliatesGetList.model';
import { master } from 'src/app/core/services/master.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  public dataSource : Array<AffiliatesList> = [];
  

  constructor(public service: master){}
  
  getListById(idSeleccionado: number){
    this.service.geByIDList(idSeleccionado).subscribe(resp=>{this.dataSource=resp;
                                                             console.log(this.dataSource)
                                                             });

  }

  getListByDate(fechaSeleccionda : string){
    this.service.geByDateList(fechaSeleccionda).subscribe(resp => {this.dataSource=resp
                                                                  console.log(this.dataSource)
                                                                  });
  }
}


