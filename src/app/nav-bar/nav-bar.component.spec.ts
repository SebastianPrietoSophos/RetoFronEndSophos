import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatToolbarModule,
                MatIconModule,
                MatMenuModule],
      declarations: [NavBarComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NavBarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
