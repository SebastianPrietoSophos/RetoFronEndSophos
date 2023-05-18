import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";
import { Observable } from 'rxjs';
import { AffiliatesModel } from "../models/affiliates.model";
@Injectable({
    providedIn: 'root'
  })
export class affiliatePost{

    
    public url : string = environment.ApiUrlAffiliates;

    constructor(private http : HttpClient){}

    postAffiliate(affiliate : AffiliatesModel) {

        this.http.post(this.url, affiliate)
        .subscribe(
            response => 
                console.log("Respuesta Post Appointments: "+response),
                error => console.log("Error al guardar appointment: "+ error) 
        );

        }
}
