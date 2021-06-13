import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../shared/article.service';
import { Article } from '../shared/article';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  NgForm = NgForm;
  article: Article;
  articleId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService,
  ) {}

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    this.article = this.articleService.getArticle(this.articleId);
  }

  onSubmit(value) {
    this.articleService.updateArticle(this.articleId, value);
    this.router.navigateByUrl('/articles');
  }
}
