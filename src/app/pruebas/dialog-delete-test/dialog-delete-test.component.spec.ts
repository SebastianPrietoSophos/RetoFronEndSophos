import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogDeleteTestComponent } from './dialog-delete-test.component';

describe('DialogDeleteTestComponent', () => {
  let component: DialogDeleteTestComponent;
  let fixture: ComponentFixture<DialogDeleteTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule],
      declarations: [DialogDeleteTestComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue:{} }]
    });
    fixture = TestBed.createComponent(DialogDeleteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
