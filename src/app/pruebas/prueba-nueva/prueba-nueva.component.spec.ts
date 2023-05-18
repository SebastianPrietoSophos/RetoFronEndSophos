import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaNuevaComponent } from './prueba-nueva.component';

describe('PruebaNuevaComponent', () => {
  let component: PruebaNuevaComponent;
  let fixture: ComponentFixture<PruebaNuevaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaNuevaComponent]
    });
    fixture = TestBed.createComponent(PruebaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
