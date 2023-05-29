import { TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule,
              MatSidenavModule,
              BrowserAnimationsModule,
              MatToolbarModule,
              MatIconModule,
              MatMenuModule
              ],
    declarations: [AppComponent, NavBarComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
