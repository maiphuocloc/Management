import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable()
export class AppHttpClient {

  apiUrl: "localhost:3000/api/v1/";

  constructor(
    private http: HttpClient,
  ) { }

  createHeader() {
    let token = localStorage.getItem('token');
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