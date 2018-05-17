import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers : new HttpHeaders({
    'Authorization': 'Basic ZGV2OmRldnB3ZA==',
    'Content-type': 'application/json'
  })
};

interface Cliente {
  id: number;
  nombre: string;
  edad: number;
}


@Injectable()
export class ApicallService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8081/';
  }


  /**
   * getResource
   */
  public getResource(uri: string) {
    console.log('--Llamada de Servicio --');
    return this.http.get(this.url + uri, httpOptions);
  }

  /**
   * postData
    uri: string
    data: any
  */
  public postData(uri: string, data: any): Observable<Cliente> {
    return this.http.post<Cliente>(this.url + uri, data , httpOptions);
  }

}
