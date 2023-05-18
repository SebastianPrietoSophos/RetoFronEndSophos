import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaNuevaComponent } from './cita-nueva.component';

describe('CitaNuevaComponent', () => {
  let component: CitaNuevaComponent;
  let fixture: ComponentFixture<CitaNuevaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitaNuevaComponent]
    });
    fixture = TestBed.createComponent(CitaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
