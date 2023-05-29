import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaHomeComponent } from './tabla-home.component';

describe('TablaHomeComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaHomeComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TablaHomeComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
