import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cliente } from './model/Cliente';

const httpOptions = {
  headers : new HttpHeaders({
    'Authorization': 'Basic ZGV2OmRldnB3ZA==',
    'Content-type': 'application/json'
  })
};

@Injectable()
export class ApicallService {
  private url: string;
  public data: any;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8081/';
  }


  /**
   * getResource
   */
  public getResource(uri: string) {
    return this.http.get(this.url + uri, httpOptions)
  }

  /**
   * postData
    uri: string
    data: any
  */
  public postData(uri: string, data: any): Observable<any> {
    return this.http.post<any>(this.url + uri, data , httpOptions);
  }

}
