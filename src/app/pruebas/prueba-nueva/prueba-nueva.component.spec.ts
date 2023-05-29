import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PruebaNuevaComponent } from './prueba-nueva.component';

describe('PruebaNuevaComponent', () => {
  let component: PruebaNuevaComponent;
  let fixture: ComponentFixture<PruebaNuevaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
                MatCardModule,
                MatFormFieldModule,
                ReactiveFormsModule,
                MatInputModule,
                BrowserAnimationsModule
                ],
      declarations: [PruebaNuevaComponent
                    ]
    });
    fixture = TestBed.createComponent(PruebaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
