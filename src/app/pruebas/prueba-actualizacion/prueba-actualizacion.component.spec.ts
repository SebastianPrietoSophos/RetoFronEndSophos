import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PruebaActualizacionComponent } from './prueba-actualizacion.component';

describe('PruebaActualizacionComponent', () => {
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule,
                HttpClientTestingModule,
                MatCardModule,
                MatFormFieldModule],
      declarations: [PruebaActualizacionComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PruebaActualizacionComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
