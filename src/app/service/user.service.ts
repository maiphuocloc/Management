import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppHttpClient } from './app-http.service';
import { User, Verify } from '../shared/models/user.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: String =  environment.base_api_url

  constructor(
    private http: AppHttpClient,
    private httpClient: HttpClient
  ) {}

  register(user: User): Observable<User> {
    return this.httpClient.post(this.apiUrl + 'user/register', user);
  }

  verify(key): Observable<any> {
    console.log("key:", key)
    return this.http.get('user/active/' + key);
  }

  login(credentials): Observable<any> {
    return this.httpClient.post(this.apiUrl + 'login', credentials);
  }

  // logout(): Observable<any> {
  //   return this.httpClient.post(this.apiUrl + 'login', credentials);
  // }

  getUsers(): Observable<any> {
    return this.http.get('user');
  }

  getUser(username): Observable<any> {
    return this.http.get(`user?username=`+ username);
  }

}
