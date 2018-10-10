import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';
import { Welcome } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfileJson(email: string) {
    if (email) {
      return this.http.jsonp<Welcome>(this.getProfileURL(email), 'callback');
    }
  }

  private getProfileURL(email: string): string {
    const gravatarURL = 'https://www.gravatar.com/';
    email = email.toLowerCase().trim();
    const hash = Md5.hashStr(email);
    const Url = gravatarURL + hash + '.json';
    return Url;
  }
}
