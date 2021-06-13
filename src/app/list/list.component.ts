import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { Article } from '../shared/article';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ArticleService } from '../shared/article.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns = ['placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano', 'acoes'];
  dataSource: MatTableDataSource<Article>;

  constructor(
    public dialog: MatDialog,
    private articleService: ArticleService,
    public snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Article>(this.getData());
  }

  getData() {
    return this.articleService.getArticles();
  }

  getTotalRows() {
    return this.articleService.getRowLength(0);
  }

  applyFilter(value: string) {
    value = value.trim().toLowerCase();
    this.dataSource.filter = value;
  }

  confirm(obj: Article) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '540px',
      data: { 
        placa: obj.placa,
        modelo: obj.modelo,
        marca: obj.marca,
        ano: obj.ano,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(obj);
      }
    });
  }

  delete(obj: Article) {
    this.articleService.deleteArticle(obj);
    this.dataSource._updateChangeSubscription();
    this.snackBar.open('Veículo apagado', '', {
      duration: 2000,
    });
  }

}