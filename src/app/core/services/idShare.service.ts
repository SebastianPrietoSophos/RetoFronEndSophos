import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class idShare{

    constructor(private http : HttpClient){}

    private id = new BehaviorSubject(0);
    currentId = this.id.asObservable();

    updateId(id : number){
        this.id.next(id)
    }
}