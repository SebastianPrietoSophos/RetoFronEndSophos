import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";
import { Observable } from 'rxjs';
import { AffiliatesModel } from "../models/affiliates.model";
import { AppointmentsModel } from "../models/appointments.model";

@Injectable({
    providedIn: 'root'
  })
export class appointmentsPut{

    
    public url : string = environment.ApiUrlAppointments;

    constructor(private http : HttpClient){}

    putAppointment(appointment : AppointmentsModel) {

        this.http.put(this.url + appointment.id, appointment)
        .subscribe(
            response => 
                console.log("Respuesta Post Appointments: " + response),
                error => console.log("Error al guardar appointment: "+ error) 
        );

        }
}