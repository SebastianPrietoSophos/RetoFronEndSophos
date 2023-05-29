import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from 'src/app/app.module';

import { AfiliadoActualizacionComponent } from './afiliado-actualizacion.component';

describe('AfiliadoActualizacionComponent', () => {
  
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [AppModule,MatDialogModule],
      declarations: [AfiliadoActualizacionComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AfiliadoActualizacionComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
