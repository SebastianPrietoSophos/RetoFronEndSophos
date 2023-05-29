import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AffiliatesModel } from 'src/app/core/models/affiliates.model';
import { TestsModel } from 'src/app/core/models/tests.model';
import { affiliatesGet } from 'src/app/core/services/affiliates.servicce';
import { idShare } from 'src/app/core/services/idShare.service';
import { testsGet } from 'src/app/core/services/tests.service';
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
    public dataSource : Array<AffiliatesModel> = [];
  public dataPruebas :  Array<TestsModel> = [];

  form : FormGroup;

    constructor(public dialog: MatDialog, private service: idShare,
      private serviceGetData: affiliatesGet,
    private serviceTests: testsGet, private formBuilder: FormBuilder){
      
      this.form = this.formBuilder.group({
        fechaSeleccionada: ['', Validators.required],
        selectedHour: ['', Validators.required],
        idSeleccionadoAfiliado: ['', Validators.required],
        idSeleccionadoPrueba: ['', Validators.required]
      });
    }

  ngOnInit(): void {
    this.service.currentId.subscribe(id=> this.id = id);
    this.serviceGetData.getList().subscribe(resp=>this.dataSource=resp);
    this.serviceTests.getList().subscribe(resp=>this.dataPruebas=resp)
  
  }

    dialogConfirmacion(
      fecha: string, hora: string, id_aff: number, id_test: number){
      this.service.currentId.subscribe(id=> this.id = id);
      this.dialog.open(DialogConfirmationPutComponent,
                      {data: {
                        id: this.id,
                        fecha: fecha,
                        hora: hora,
                        idAfiliado: id_aff,
                        idPrueba: id_test
                      }});
    }
    

}
