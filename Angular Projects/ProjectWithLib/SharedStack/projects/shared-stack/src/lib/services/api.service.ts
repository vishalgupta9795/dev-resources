import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG, ApiConfig } from '../tokens/api-config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string;

  constructor(
    private http: HttpClient,
    @Optional() @Inject(API_CONFIG) config: ApiConfig | null
  ) {
    this.baseUrl = config?.baseUrl || '';
  }

  private CreateHeaders(customHeaders?: any): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...customHeaders
    });
    const token = sessionStorage.getItem('token');
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    if (customHeaders) {
      Object.keys(customHeaders).forEach(key => {
        headers = headers.set(key, customHeaders[key]);
      });
    }
    return headers;
  }

  private buildUrl(url: string): string {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `${this.baseUrl}${url}`;
  }

  Get<T>(url: string, params?: any, customHeaders?: any): Observable<T> {
    return this.http.get<T>(this.buildUrl(url), { params, headers: this.CreateHeaders(customHeaders) });
  }
  Post<T>(url:string, body:any, customHeaders?:any):Observable<T>{
    return this.http.post<T>(this.buildUrl(url), body, { headers: this.CreateHeaders(customHeaders) });
  }
  Put<T>(url:string, body:any, customHeaders?:any):Observable<T>{
    return this.http.put<T>(this.buildUrl(url), body, { headers: this.CreateHeaders(customHeaders) });
  }
  Delete<T>(url:string, customHeaders?:any):Observable<T>{
    return this.http.delete<T>(this.buildUrl(url), { headers: this.CreateHeaders(customHeaders) });
  }
 patch<T>(url:string, body:any, customHeaders?:any):Observable<T>{
    return this.http.patch<T>(this.buildUrl(url), body, { headers: this.CreateHeaders(customHeaders) });
  }
}
