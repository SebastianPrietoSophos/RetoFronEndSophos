import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";
import { Observable } from 'rxjs';
import { AffiliatesModel } from "../models/affiliates.model";
import { AppointmentsModel } from "../models/appointments.model";
import { TestsModel } from "../models/tests.model";

@Injectable({
    providedIn: 'root'
  })
export class testPut{

    
    public url : string = environment.ApiUrlTests;

    constructor(private http : HttpClient){}

    putTest(test : TestsModel) {

        this.http.put(this.url + test.id, test)
        .subscribe(
            response => 
                console.log("Respuesta Post Appointments: " + response),
                error => console.log("Error al guardar appointment: "+ error) 
        );

        }
}