import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteAffiliateComponent } from './dialog-delete-affiliate.component';

describe('DialogDeleteAffiliateComponent', () => {
  let component: DialogDeleteAffiliateComponent;
  let fixture: ComponentFixture<DialogDeleteAffiliateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDeleteAffiliateComponent]
    });
    fixture = TestBed.createComponent(DialogDeleteAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
