import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteTestComponent } from './dialog-delete-test.component';

describe('DialogDeleteTestComponent', () => {
  let component: DialogDeleteTestComponent;
  let fixture: ComponentFixture<DialogDeleteTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDeleteTestComponent]
    });
    fixture = TestBed.createComponent(DialogDeleteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
