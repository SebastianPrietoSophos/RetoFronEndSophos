import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteAppointmentComponent } from './dialog-delete-appointment.component';

describe('DialogDeleteAppointmentComponent', () => {
  let component: DialogDeleteAppointmentComponent;
  let fixture: ComponentFixture<DialogDeleteAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDeleteAppointmentComponent]
    });
    fixture = TestBed.createComponent(DialogDeleteAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
