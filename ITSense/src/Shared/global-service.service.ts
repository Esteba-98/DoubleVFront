import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  private url = environment.url;
  constructor(private http: HttpClient) { }
  
  get (modulo:string, parameters:string ){
    return this.http.get(`${this.url}${modulo}${parameters}`);
  }

  post(modulo: string, parameters: any) {
    return this.http.post(`${this.url}${modulo}`,parameters);
  }
}
