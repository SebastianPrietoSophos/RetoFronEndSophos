import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdPickerComponent } from './id-picker.component';

describe('IdPickerComponent', () => {
  let component: IdPickerComponent;
  let fixture: ComponentFixture<IdPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdPickerComponent]
    });
    fixture = TestBed.createComponent(IdPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
