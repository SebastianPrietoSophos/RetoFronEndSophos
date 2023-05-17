import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";
import { Observable } from 'rxjs';
import { AffiliatesList } from "../models/affiliatesGetList.model";

@Injectable({
    providedIn: 'root'
  })
export class master{

    date : string = '';
    public urlDate : string = environment.ApiUrlAppointmentsByDate;
    public urlId : string =environment.ApiUrlAppointmentsByUserID;

    constructor(private http : HttpClient){}

    geByIDList(id: number):Observable<AffiliatesList[]> {
        console.log(this.urlId);
        return this.http.get<AffiliatesList[]>(this.urlId + 'affiliate/' + id);

    }

    geByDateList(date: string):Observable<AffiliatesList[]> {
        const params = new HttpParams().set('date', date);
        console.log(this.urlDate);
        return this.http.get<AffiliatesList[]>(this.urlDate,{params});
    }
}