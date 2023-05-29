import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogConfirmationPutAffiliateComponent } from './dialog-confirmation-put-affiliate.component';

describe('DialogConfirmationPutAffiliateComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule],
      declarations: [DialogConfirmationPutAffiliateComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue:{} }]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DialogConfirmationPutAffiliateComponent)
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
