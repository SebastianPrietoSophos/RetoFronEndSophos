import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";
import { Observable } from 'rxjs';
import { TestsModel } from "../models/tests.model";
@Injectable({
    providedIn: 'root'
  })
export class testPost{

    
    public url : string = environment.ApiUrlTests;

    constructor(private http : HttpClient){}

    postAffiliate(test : TestsModel) {

        this.http.post(this.url, test)
        .subscribe(
            response => 
                console.log("Respuesta Post Appointments: " + response),
                error => console.log("Error al guardar appointment: "+ error) 
        );

        }
}
