import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { async } from 'rxjs';

import { CitasComponent } from './citas.component';

describe('CitasComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
                RouterTestingModule,
                MatDialogModule,
                MatIconModule
              ],
      declarations: [CitasComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CitasComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
