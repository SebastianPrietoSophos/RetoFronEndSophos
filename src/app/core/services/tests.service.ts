import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";
import { Observable } from 'rxjs';
import { TestsModel } from "../models/tests.model";

@Injectable({
    providedIn: 'root'
  })
export class testsGet{

    
    public url : string = environment.ApiUrlTests;

    constructor(private http : HttpClient){}

    getList():Observable<TestsModel[]> {

        return this.http.get<TestsModel[]>(this.url);

    }
}