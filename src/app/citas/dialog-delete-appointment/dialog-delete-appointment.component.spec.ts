import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MY_FORMATS } from 'src/app/environments/my_date_format';

import { DialogDeleteAppointmentComponent } from './dialog-delete-appointment.component';

describe('DialogDeleteAppointmentComponent', () => {
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatMenuModule,
        MatTableModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        FormsModule,
        MatSelectModule,
        ReactiveFormsModule,
        RouterTestingModule
      
      ],
      declarations: [DialogDeleteAppointmentComponent],
      providers: [{ provide: MAT_DIALOG_DATA,useValue:{} }]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DialogDeleteAppointmentComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
