import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmationPutAffiliateComponent } from './dialog-confirmation-put-affiliate.component';

describe('DialogConfirmationPutAffiliateComponent', () => {
  let component: DialogConfirmationPutAffiliateComponent;
  let fixture: ComponentFixture<DialogConfirmationPutAffiliateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogConfirmationPutAffiliateComponent]
    });
    fixture = TestBed.createComponent(DialogConfirmationPutAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
