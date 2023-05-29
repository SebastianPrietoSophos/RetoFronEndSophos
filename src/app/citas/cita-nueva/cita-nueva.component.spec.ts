import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { CitaNuevaComponent } from './cita-nueva.component';

describe('CitaNuevaComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
                MatCardModule,
                MatFormFieldModule,
                MatNativeDateModule, 
                MatMomentDateModule,
                MatDatepickerModule,
                MatSelectModule
              ],
      declarations: [CitaNuevaComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CitaNuevaComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
