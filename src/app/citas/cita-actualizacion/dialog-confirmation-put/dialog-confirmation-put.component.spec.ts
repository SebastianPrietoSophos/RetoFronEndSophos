import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogConfirmationPutComponent } from './dialog-confirmation-put.component';

describe('DialogConfirmationPutComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule],
      declarations: [DialogConfirmationPutComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue:{} }]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DialogConfirmationPutComponent)
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

