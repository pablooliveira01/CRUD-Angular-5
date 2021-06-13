import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormEditComponent } from './form-edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import { FormCreateComponent } from '../form-create/form-create.component';
import { APP_BASE_HREF } from '@angular/common';
import { ArticleService } from '../shared/article.service';

describe('FormEditComponent', () => {
  let component: FormEditComponent;
  let fixture: ComponentFixture<FormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditComponent, FormCreateComponent],
      imports: [
        FormsModule, MatDialogModule, MatTableModule, MatCardModule, MatInputModule,
        MatFormFieldModule, BrowserAnimationsModule, RouterModule.forRoot([])
      ],
      providers: [
        ArticleService,
        { provide: APP_BASE_HREF, useValue: '/' },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deveria ser criado', () => {
    expect(component).toBeTruthy();
  });
});
