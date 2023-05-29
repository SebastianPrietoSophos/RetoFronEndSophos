import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IdPickerComponent } from './id-picker.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 

describe('IdPickerComponent', () => {  

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [IdPickerComponent],
      imports: [FormsModule, 
        HttpClientTestingModule, 
        MatFormFieldModule, 
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
  const fixture = TestBed.createComponent(IdPickerComponent);
  const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
  
  
    it('should disable the "Consultar" button when the input value is invalid', () => {
      const fixture = TestBed.createComponent(IdPickerComponent);
      const component = fixture.debugElement.componentInstance;
      const input = fixture.debugElement.query(By.css('input')).nativeElement;
      const button = fixture.debugElement.query(By.css('button[mat-fab]')).nativeElement;
      component.value = '';
      fixture.detectChanges();
      expect(input.value).toBe('');
      expect(button.disabled).toBe(true);
    });
  
   
  
    it('should enable the "Consultar" button when the input value is valid', () => {
      const fixture = TestBed.createComponent(IdPickerComponent);
      const component = fixture.debugElement.componentInstance;
      const input = fixture.debugElement.query(By.css('input')).nativeElement;
      const button = fixture.debugElement.query(By.css('button[mat-fab]')).nativeElement;
      component.value = '123';
      fixture.detectChanges();
      expect(component.value).toBe('123');
      expect(button.disabled).toBe(true);
    });
});