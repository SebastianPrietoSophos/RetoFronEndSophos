import { HttpParams } from '@angular/common/http';
import { Component, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
    
  @Output() fecha_elegida = new EventEmitter<string>;

  confirmDate(fechaSeleccionada : HTMLInputElement){
    console.log(fechaSeleccionada.value);
    this.fecha_elegida.emit(fechaSeleccionada.value);
    console.log(fechaSeleccionada.value)
  }
}
