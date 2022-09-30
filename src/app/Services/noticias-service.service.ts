import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasServiceService {

  private apiKey;
  private url;

  private cabecera;

  constructor(private http: HttpClient) { 
    this.apiKey = 'oPW2AbNi4AyskfDEpDu2nhHHDweJqXiHxLiuhdIOnCU';
    this.url = 'https://api.newscatcherapi.com/v2/search?';
    this.cabecera = new HttpHeaders().set('x-api-key',this.apiKey);
  }

  getNews(pais: string, categoria: string): Observable<any>
  {
    return this.http.get(this.url + 'q=' + categoria + '&countries=' + pais, {headers: this.cabecera});
  }
}
