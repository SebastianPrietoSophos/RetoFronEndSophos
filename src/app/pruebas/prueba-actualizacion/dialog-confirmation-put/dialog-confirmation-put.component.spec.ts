import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfirmationPutComponent } from 'src/app/citas/cita-actualizacion/dialog-confirmation-put/dialog-confirmation-put.component';

import { DialogConfirmationPutPruebaComponent } from './dialog-confirmation-put.component';

describe('DialogConfirmationPutComponent', () => {
  const fixture = TestBed.createComponent(DialogConfirmationPutComponent);
    const component = fixture.debugElement.componentInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, MAT_DIALOG_DATA, MatDialogRef],
      declarations: [DialogConfirmationPutComponent]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
