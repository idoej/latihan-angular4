import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../helper';
import {Article} from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  async list() {
    return await this.http.get<Article[]>(BASE_URL + '/articles').toPromise();
  }

  async get(id: string) {
    return await this.http.get<Article>(BASE_URL + '/articles/' + id).toPromise();
  }

  async add(atitle: string, abody: string, acreatedAt: Date) {
    const data = {
      title: atitle,
      body: abody,
      createdAt: acreatedAt,
    };
    return await this.http.post<Article>(BASE_URL + '/articles', data, ).toPromise();
  }
}
