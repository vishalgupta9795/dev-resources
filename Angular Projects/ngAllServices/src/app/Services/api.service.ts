import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enverment } from '../../envarment/enverment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
BaseUrl:string= Enverment.API_URL;

  constructor(private http: HttpClient) {}

  private CreateHeader(CustomHeaders: any) : HttpHeaders{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...CustomHeaders
    });
    const token = sessionStorage.getItem('token');
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    // if(CustomHeaders){
    //  Object.keys(CustomHeaders).forEach(key => {
    //     headers = headers.set(key, CustomHeaders[key]);
    //   });
    // }
    return headers;
  }

  private BuildUrl(endpoint: string): string {
     if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
      return endpoint;
    }
    return `${this.BaseUrl}/${endpoint}`;
  }

Get<T>(url: string, params?: any, customHeaders?: any): Observable<T> {
    return this.http.get<T>(this.BuildUrl(url), { params, headers: this.CreateHeader(customHeaders) });
  }
  Post<T>(url:string, body:any, customHeaders?:any):Observable<T>{
    return this.http.post<T>(this.BuildUrl(url), body, { headers: this.CreateHeader(customHeaders) });
  }
  Put<T>(url:string, body:any, customHeaders?:any):Observable<T>{
    return this.http.put<T>(this.BuildUrl(url), body, { headers: this.CreateHeader(customHeaders) });
  }
  Delete<T>(url:string, customHeaders?:any):Observable<T>{
    return this.http.delete<T>(this.BuildUrl(url), { headers: this.CreateHeader(customHeaders) });
  }
 patch<T>(url:string, body:any, customHeaders?:any):Observable<T>{
    return this.http.patch<T>(this.BuildUrl(url), body, { headers: this.CreateHeader(customHeaders) });
  }

}
