import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";
import { Observable } from 'rxjs';
import { Appointments } from "../models/affiliatesGetList.model";

@Injectable({
    providedIn: 'root'
  })
export class master{

    date : string = '';
    public urlDate : string = environment.ApiUrlAppointmentsByDate;
    public urlId : string =environment.ApiUrlAppointmentsByUserID;

    constructor(private http : HttpClient){}

    geByIDList(id: number):Observable<Appointments[]> {
        console.log(this.urlId);
        return this.http.get<Appointments[]>(this.urlId + 'affiliate/' + id);

    }

    geByDateList(date: string):Observable<Appointments[]> {
        const params = new HttpParams().set('date', date);
        console.log(this.urlDate);
        return this.http.get<Appointments[]>(this.urlDate,{params});
    }
}