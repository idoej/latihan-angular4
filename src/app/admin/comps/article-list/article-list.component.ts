import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../../services/article.service';
import {Article} from '../../../model/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articleList: Article[] = [];
  page = 1;
  next = false;
  sort = 'title';
  asc = true;

  constructor(private articleService: ArticleService) { }
  private fetchData() {
    this.articleService.list(this.page, this.sort, this.asc ? 'asc' : 'desc')
      .then(data => {
        this.articleList = data;
        if (this.next && this.articleList.length === 0 && this.page > 1) { // retry with previous page
          this.page--;
          this.fetchData();
        }
        this.next = false;
      });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  nextPage() {
    this.page++; // json server does not have count endpoint, so...whatever
    this.next = true;
    this.fetchData();
  }

  prevPage() {
    this.page = Math.max(1, this.page - 1);
    this.fetchData();
  }

  sortTitle() {
    this.sort = 'title';
    this.asc = !this.asc;
    this.fetchData();
  }

  sortCreatedAt() {
    this.sort = 'createdAt';
    this.asc = !this.asc;
    this.fetchData();
  }
}
