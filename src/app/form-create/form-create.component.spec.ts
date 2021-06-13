import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCreateComponent } from './form-create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule, MatTableModule, MatFormFieldModule, 
  MatInputModule, MatDialogModule, MatSnackBar,
} from '@angular/material';
import { FormEditComponent } from '../form-edit/form-edit.component';
import { APP_BASE_HREF } from '@angular/common';
import { ArticleService } from '../shared/article.service';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';

describe('FormCreateComponent', () => {
  let component: FormCreateComponent;
  let fixture: ComponentFixture<FormCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreateComponent, FormEditComponent],
      imports: [
        FormsModule, MatDialogModule, MatTableModule, MatCardModule, MatInputModule,
        MatFormFieldModule, BrowserAnimationsModule, RouterModule.forRoot([])
      ],
      providers: [
        ArticleService, MatSnackBar, BreakpointObserver, MediaMatcher,
        { provide: APP_BASE_HREF, useValue: '/' },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deveria ser criado', () => {
    expect(component).toBeTruthy();
  });
});
