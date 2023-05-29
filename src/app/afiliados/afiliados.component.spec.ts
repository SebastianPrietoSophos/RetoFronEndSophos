import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AfiliadosComponent } from './afiliados.component';

describe('AfiliadosComponent', () => {
  let component: AfiliadosComponent;
  let fixture: ComponentFixture<AfiliadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
                MatDialogModule,
                MatIconModule
              ],
      declarations: [AfiliadosComponent]
    });
    fixture = TestBed.createComponent(AfiliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
