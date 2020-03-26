import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../../services/article.service';
import {Article} from '../../../model/article';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  article: Article;

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    this.articleService.get(param).then(
      data => this.article = data
    );
  }

}
