import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliadoNuevoComponent } from './afiliado-nuevo.component';

describe('AfiliadoNuevoComponent', () => {
  let component: AfiliadoNuevoComponent;
  let fixture: ComponentFixture<AfiliadoNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfiliadoNuevoComponent]
    });
    fixture = TestBed.createComponent(AfiliadoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
