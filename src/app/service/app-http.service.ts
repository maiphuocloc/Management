import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { environment } from '../../environments/environment';

@Injectable()
export class AppHttpClient {

  apiUrl: String =  environment.base_api_url
 
  constructor(
    private http: HttpClient,
  ) { }

  createHeader() {
    let token = localStorage.getItem('accessToken');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': '' + token + '' });
    return headers
  }

  put(url, data): Observable<any> {
    let headers = this.createHeader();
    return this.http.put(this.apiUrl + url, data, {
      headers: headers
    });
  }

  get(url): Observable<any> {
    let headers = this.createHeader();
    return this.http.get(this.apiUrl + url, {
      headers: headers
    });
  }

  post(url, data): Observable<any> {
    let headers = this.createHeader();
    return this.http.post(this.apiUrl + url, data, {
      headers: headers
    });
  }

  delete(url): Observable<any> {
    let headers = this.createHeader();
    return this.http.delete(this.apiUrl + url, {
      headers: headers
    });
  }

  deletes(url, data): Observable<any> {
    let headers = this.createHeader();
    return this.http.post(this.apiUrl + url, data, {
      headers: headers
    });
  }
}