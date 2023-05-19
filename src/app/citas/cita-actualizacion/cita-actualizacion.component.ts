import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { idShare } from 'src/app/core/services/idShare.service';
import { DialogConfirmationPutComponent } from './dialog-confirmation-put/dialog-confirmation-put.component';


@Component({
  selector: 'app-cita-actualizacion',
  templateUrl: './cita-actualizacion.component.html',
  styleUrls: ['./cita-actualizacion.component.css']
})
export class CitaActualizacionComponent implements OnInit{
  selectedHour : string = '';
    valueAffiliate : number = 0;
    valueTest : number = 0;
    horasCitas : Array<string> = 
    ['08:00:00', '09:00:00','10:00:00','11:00:00','12:00:00','13:00:00','14:00:00','15:00:00',
    '16:00:00','17:00:00','18:00:00'];
    id:number=0;

    constructor(public dialog: MatDialog, private service: idShare){}

  ngOnInit(): void {
    this.service.currentId.subscribe(id=> this.id = id);
  }

    dialogConfirmacion(
      fecha: HTMLInputElement, hora: any, idAfiliado: HTMLInputElement, idPrueba: HTMLInputElement){
      this.service.currentId.subscribe(id=> this.id = id);
      this.dialog.open(DialogConfirmationPutComponent,
                      {data: {
                        id: this.id,
                        fecha: fecha.value,
                        hora: hora.value,
                        idAfiliado: idAfiliado.valueAsNumber,
                        idPrueba: idPrueba.valueAsNumber
                      }});
    }
    

}
