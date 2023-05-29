import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { DatePickerComponent } from './home.components/date-picker/date-picker.component';
import { IdPickerComponent } from './home.components/id-picker/id-picker.component';
import { TablaHomeComponent } from './home.components/tabla-home/tabla-home.component';

describe('HomeComponent', () => {
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
                HttpClientTestingModule,
                MatSidenavModule,
                MatFormFieldModule,
                MatNativeDateModule, 
                MatMomentDateModule,
                MatDatepickerModule,
                MatIconModule,
                ReactiveFormsModule,
                FormsModule,
                RouterTestingModule
                ],
      declarations: [HomeComponent,
                    DatePickerComponent,
                    IdPickerComponent,
                    TablaHomeComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
