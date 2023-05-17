import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";
import { Observable } from 'rxjs';
import { AffiliatesModel } from "../models/affiliates.model";

@Injectable({
    providedIn: 'root'
  })
export class affiliatesGet{

    
    public url : string = environment.ApiUrlAffiliates;

    constructor(private http : HttpClient){}

    getList():Observable<AffiliatesModel[]> {

        return this.http.get<AffiliatesModel[]>(this.url);

    }
}