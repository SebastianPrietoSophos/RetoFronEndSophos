import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmationPutComponent } from './dialog-confirmation-put.component';

describe('DialogConfirmationPutComponent', () => {
  let component: DialogConfirmationPutComponent;
  let fixture: ComponentFixture<DialogConfirmationPutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogConfirmationPutComponent]
    });
    fixture = TestBed.createComponent(DialogConfirmationPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
