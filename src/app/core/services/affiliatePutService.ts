import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";
import { Observable } from 'rxjs';
import { AffiliatesModel } from "../models/affiliates.model";

@Injectable({
    providedIn: 'root'
  })
export class affiliatePut{

    
    public url : string = environment.ApiUrlAffiliates;

    constructor(private http : HttpClient){}

    putAffiliate(affiliate : AffiliatesModel) {

        this.http.put(this.url + affiliate.id, affiliate)
        .subscribe(
            response => 
                console.log("Respuesta PUt Affiliates: " + response),
                error => console.log("Error al guardar affiliates: "+ error) 
        );

        }
}