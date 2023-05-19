import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";
import { AppointmentsModel } from "../models/appointments.model";

@Injectable({
    providedIn: 'root'
  })
export class appointmentsDelete{

    
    public url : string = environment.ApiUrlAppointments;

    constructor(private http : HttpClient){}

    deleteAppointment(id: number) {

        this.http.delete(this.url + id)
        .subscribe(
            response => 
                console.log("Respuesta Post Appointments: " + response),
                error => console.log("Error al guardar appointment: "+ error) 
        );

        }
}