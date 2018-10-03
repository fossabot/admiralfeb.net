import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {} from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
}
