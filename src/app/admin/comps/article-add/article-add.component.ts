import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ArticleService} from '../../../services/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {
  title = new FormControl('', Validators.required);
  body = new FormControl('', Validators.required);

  constructor(private articleService: ArticleService, private route: Router) { }

  ngOnInit(): void {
  }

  create() {
    console.log('asds');
    this.articleService.add(this.title.value, this.body.value, new Date()).then(
      data => {
        this.route.navigate(['/admin/article', data.id]);
      }
    );
  }

}
