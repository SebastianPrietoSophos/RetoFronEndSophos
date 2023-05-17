import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";
import { Observable } from 'rxjs';
import { AffiliatesList } from "../models/affiliatesGetList.model";

@Injectable({
    providedIn: 'root'
  })
export class appointmentsGet{

    
    public url : string = environment.ApiUrlAppointments;

    constructor(private http : HttpClient){}

    getList():Observable<AffiliatesList[]> {

        return this.http.get<AffiliatesList[]>(this.url);

    }
}