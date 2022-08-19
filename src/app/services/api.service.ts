import { GlobalsService } from 'src/app/services/globals.service';
import { Observable } from 'rxjs';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  axios: any;
  constructor(
    private http: HttpClient,
    private g: GlobalsService,
    private httpBackendHandler: HttpBackend
  ) {
    this.httpBackend = new HttpClient(httpBackendHandler);
    this.axios = axios.create();
  }

  httpBackend: HttpClient;

  get(path: string): Observable<any> {
    return this.http.get(`${this.g.api}/${path}`);
  }

  post(path: string, body: any): Observable<any> {
    return this.http.post(`${this.g.api}/${path}`, body);
  }

  put(path: string, body: any): Observable<any> {
    return this.http.put(`${this.g.api}/${path}`, body);
  }

  delete(path: string, options: any): Observable<any> {
    return this.http.delete(`${this.g.api}/${path}`, options);
  }
}
