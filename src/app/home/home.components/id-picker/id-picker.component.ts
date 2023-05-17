import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-id-picker',
  templateUrl: './id-picker.component.html',
  styleUrls: ['./id-picker.component.css']
})
export class IdPickerComponent {
  
  value = '';

  @Output() id_elegido = new EventEmitter<number>;

  confirmId(idSeleccionado : HTMLInputElement){
    console.log(idSeleccionado.value);
    this.id_elegido.emit(idSeleccionado.valueAsNumber);
    console.log(idSeleccionado.valueAsNumber)
  }
  
}
