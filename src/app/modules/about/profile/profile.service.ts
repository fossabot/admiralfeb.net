import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Welcome } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  json;

  constructor(private http: HttpClient) { }

  getProfileJson(email: string) {
    if (email) {
      return this.http.jsonp<Welcome>(this.getProfileURL(email), 'callback');
    }
  }

  private getProfileURL(email: string): string {
    const gravatarURL = 'https://www.gravatar.com/';
    email = email.toLowerCase().trim();
    const md5z = require('md5');
    const hash = md5z(email);
    const Url = gravatarURL + hash + '.json';
    return Url;
  }
}
