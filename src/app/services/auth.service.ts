import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../helper';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookie: CookieService) { }

  async login(username: string, password: string) {
    const data = await this.http.get<any>(BASE_URL + '/auth').toPromise();
    const success = data.username === username && data.password === password;
    if (success) {
      this.cookie.set('token', data.token);
    }
    return success;
  }

  authenticated(): boolean {
    return this.cookie.check('token');
  }

  logout() {
    this.cookie.delete('token');
  }
}
