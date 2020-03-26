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

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.list().then(data => this.articleList = data);
  }

}
