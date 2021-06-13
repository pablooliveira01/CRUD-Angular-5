import { Injectable } from '@angular/core';
import { Article } from './article';
import { ARTICLES } from './mock-articles';

@Injectable()
export class ArticleService {

  idGen: number = ARTICLES.length;

  constructor() { }

  getArticles(): Article[] {
    this.getRowLength(this.idGen)
    return ARTICLES;
  }

  getRowLength = (number: number) => {
    let idGen = ARTICLES.length;
    return number ? number : idGen
  }

  getArticle(id: number): Article {
    const index = this._findIndexById(id);
    return ARTICLES[index];
  }

  storeArticle(newArticle: any) {
    this.idGen++;
    this.getRowLength(this.idGen)

    ARTICLES.push({
      id: this.idGen,
      placa: newArticle.placa,
      chassi: newArticle.chassi,
      renavam: newArticle.renavam,
      modelo: newArticle.modelo,
      marca: newArticle.marca,
      ano: newArticle.ano,
    });
  }

  updateArticle(id: number, newArticle: any) {
    let art = ARTICLES[this._findIndexById(id)];

    art.placa = newArticle.placa;
    art.chassi = newArticle.chassi;
    art.renavam = newArticle.renavam;
    art.modelo = newArticle.modelo;
    art.marca = newArticle.marca;
    art.ano = newArticle.ano;
  }

  deleteArticle(obj: Article) {
    const index = ARTICLES.indexOf(obj);
    ARTICLES.splice(index, 1);
  }

  private _findIndexById(id: number): number {
    return ARTICLES.findIndex(function (element) {
      return element.id === id;
    });
  }

}
