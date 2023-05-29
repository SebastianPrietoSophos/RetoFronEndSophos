import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogDeleteAffiliateComponent } from './dialog-delete-affiliate.component';

describe('DialogDeleteAffiliateComponent', () => {
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule,
                MatDialogModule],
      declarations: [DialogDeleteAffiliateComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue:{} }]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DialogDeleteAffiliateComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
