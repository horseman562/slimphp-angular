import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/your-route`);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/your-route`, data);
  }

}
