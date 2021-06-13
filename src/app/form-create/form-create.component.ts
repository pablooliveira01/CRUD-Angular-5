import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ArticleService } from '../shared/article.service';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  constructor(
    private router: Router,
    private articleService: ArticleService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(value) {
    if (value.placa === '' || value.chassi === '' || value.renavam === '' || value.modelo === '' || value.marca === '' || value.ano === '') {
      this.snackBar.open('Preencha todos os campos, por favor.', '', {
        duration: 2000,
      });
    } else {
      this.articleService.storeArticle(value);
      this.router.navigateByUrl('/articles');
    }
  }

}
