import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AfiliadoNuevoComponent } from './afiliado-nuevo.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AfiliadoNuevoComponent', () => {
  let component: AfiliadoNuevoComponent;
  let fixture: ComponentFixture<AfiliadoNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, 
                MatCardModule, 
                MatFormFieldModule, 
                ReactiveFormsModule,
                MatInputModule,
                BrowserAnimationsModule  
              ],
      declarations: [AfiliadoNuevoComponent],
      providers: [AfiliadoNuevoComponent]
    });
    component = TestBed.inject(AfiliadoNuevoComponent);
    fixture = TestBed.createComponent(AfiliadoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
