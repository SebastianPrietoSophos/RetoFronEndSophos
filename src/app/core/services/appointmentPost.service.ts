import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";
import { Observable } from 'rxjs';
import { AffiliatesModel } from "../models/affiliates.model";
import { AppointmentsModel, AppointmentsModelForPost } from "../models/appointments.model";

@Injectable({
    providedIn: 'root'
  })
export class appointmentsPost{

    
    public url : string = environment.ApiUrlAppointments;

    constructor(private http : HttpClient){}

    postAppointment(appointment : AppointmentsModelForPost) {

        this.http.post(this.url, appointment)
        .subscribe(
            response => 
                console.log("Respuesta Post Appointments: "+response),
                error => console.log("Error al guardar appointment: "+ error) 
        );

        }
}
