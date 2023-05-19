import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaActualizacionComponent } from './prueba-actualizacion.component';

describe('PruebaActualizacionComponent', () => {
  let component: PruebaActualizacionComponent;
  let fixture: ComponentFixture<PruebaActualizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaActualizacionComponent]
    });
    fixture = TestBed.createComponent(PruebaActualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
