import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {


  constructor(private http: HttpClient) { }

  get(url : string) {
    return this.http.get(url);
  };

  post(url: string, body: any) {
    return this.http.post(url, body);
  };

  put(url: string, body: any) {
    return this.http.put(url, body);
  };

  delete(url: string, id: number) {
    return this.http.delete(`${url}/${id}`);
  }

}
