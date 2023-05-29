import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/app/environments/environments.master";

@Injectable({
    providedIn: 'root'
  })
export class testDelete{

    
    public url : string = environment.ApiUrlTests;

    constructor(private http : HttpClient){}

    deleteTest(id: number) {

        this.http.delete(this.url + id)
        .subscribe(
            response => 
                console.log("Respuesta Post Appointments: " + response),
                error => console.log("Error al guardar appointment: "+ error) 
        );

        }
}