import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";
import { Observable } from 'rxjs';
import { Appointments } from "../models/affiliatesGetList.model";

@Injectable({
    providedIn: 'root'
  })
export class appointmentsGet{

    
    public url : string = environment.ApiUrlAppointments;

    constructor(private http : HttpClient){}

    getList():Observable<Appointments[]> {

        return this.http.get<Appointments[]>(this.url);

    }
}