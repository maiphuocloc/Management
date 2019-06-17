import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppHttpClient } from './app-http.service';
import { User } from '../shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: "localhost:3000/api/v1/";

  constructor(
    private appHttpClient: AppHttpClient,
    private httpClient: HttpClient
  ) {}

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl + 'users/signup', user);
  }

  login(credentials): Observable<any> {
    return this.httpClient.post<User>(this.apiUrl + 'users/login', credentials);
  }
}
