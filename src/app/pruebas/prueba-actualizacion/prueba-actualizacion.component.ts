import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { idShare } from 'src/app/core/services/idShare.service';
import { DialogConfirmationPutPruebaComponent } from './dialog-confirmation-put/dialog-confirmation-put.component';

@Component({
  selector: 'app-prueba-actualizacion',
  templateUrl: './prueba-actualizacion.component.html',
  styleUrls: ['./prueba-actualizacion.component.css']
})
export class PruebaActualizacionComponent {

  nombreValue : string = '';
  descripcionValue : string = '';
  id : number = 0;

  form : FormGroup;

  constructor(public dialog: MatDialog, private service: idShare, private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      nombre : ['', Validators.required],
      descripcion : ['', Validators.required]
    });}

ngOnInit(): void {
  this.service.currentId.subscribe(id=> this.id = id);
}

  dialogConfirmacion(
    nombre: HTMLInputElement, descripcion: HTMLInputElement){
    this.service.currentId.subscribe(id=> this.id = id);
    this.dialog.open(DialogConfirmationPutPruebaComponent,
                    {data: {
                      id: this.id,
                      nombre: nombre.value,
                      description: descripcion.value
                    }});
  }

}
