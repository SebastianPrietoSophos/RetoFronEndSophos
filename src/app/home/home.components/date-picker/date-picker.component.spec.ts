import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { DatePickerComponent } from './date-picker.component';

describe('DatePickerComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormFieldModule,
                MatDatepickerModule,
                MatFormFieldModule,
                MatNativeDateModule, 
                MatMomentDateModule,
                MatIconModule,
                MatDatepickerModule,
                MatDatepickerModule],
      declarations: [DatePickerComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DatePickerComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
