import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule, MatTableModule,
  MatFormFieldModule, MatInputModule,
  MatIconModule, MatDialogModule, MatSnackBar,
} from '@angular/material';
import { ArticleService } from '../shared/article.service';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [
        FormsModule, MatDialogModule, MatTableModule, MatCardModule, MatInputModule,
        MatIconModule, MatFormFieldModule, BrowserAnimationsModule, RouterModule.forRoot([])
      ],
      providers: [
        ArticleService, MatSnackBar, BreakpointObserver, MediaMatcher,
        { provide: APP_BASE_HREF, useValue: '/' },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deveria ser criado', () => {
    expect(component).toBeTruthy();
  });
});
