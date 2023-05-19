import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaActualizacionComponent } from './cita-actualizacion.component';

describe('CitaActualizacionComponent', () => {
  let component: CitaActualizacionComponent;
  let fixture: ComponentFixture<CitaActualizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitaActualizacionComponent]
    });
    fixture = TestBed.createComponent(CitaActualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
