import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AppModule } from 'src/app/app.module';

import { CitaActualizacionComponent } from './cita-actualizacion.component';

describe('CitaActualizacionComponent', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
                AppModule,
                HttpClientTestingModule,
                MatDialogModule,
                MatCardModule,
                MatNativeDateModule, 
                MatMomentDateModule,
                MatFormFieldModule,
                MatDatepickerModule,
                MatSelectModule
              ],
      declarations: [CitaActualizacionComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue:{} }]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CitaActualizacionComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
