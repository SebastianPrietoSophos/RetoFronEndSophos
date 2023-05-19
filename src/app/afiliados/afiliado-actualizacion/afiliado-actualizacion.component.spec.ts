import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliadoActualizacionComponent } from './afiliado-actualizacion.component';

describe('AfiliadoActualizacionComponent', () => {
  let component: AfiliadoActualizacionComponent;
  let fixture: ComponentFixture<AfiliadoActualizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfiliadoActualizacionComponent]
    });
    fixture = TestBed.createComponent(AfiliadoActualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
