import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  upComingMovies(): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('accepet', 'application/json');
    httpHeaders.append('Authorization', `Bearer ${environment.token}`);
    return this.http.get<any>(
      `${this.baseApiUrl}/movie/upcoming?api_key=${environment.apiKey}`,
      {
        headers: httpHeaders,
      }
    );
  }

  nowPlaying(): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('accepet', 'application/json');
    httpHeaders.append('Authorization', `Bearer ${environment.token}`);
    return this.http.get<any>(
      `${this.baseApiUrl}/movie/now_playing?api_key=${environment.apiKey}`,
      {
        headers: httpHeaders,
      }
    );
  }

  topRated(): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('accepet', 'application/json');
    httpHeaders.append('Authorization', `Bearer ${environment.token}`);
    return this.http.get<any>(
      `${this.baseApiUrl}/movie/top_rated?api_key=${environment.apiKey}`,
      {
        headers: httpHeaders,
      }
    );
  }

  populars(): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('accepet', 'application/json');
    httpHeaders.append('Authorization', `Bearer ${environment.token}`);
    return this.http.get<any>(
      `${this.baseApiUrl}/movie/popular?api_key=${environment.apiKey}`,
      {
        headers: httpHeaders,
      }
    );
  }

  randomFilm() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('accepet', 'application/json');
    httpHeaders.append('Authorization', `Bearer ${environment.token}`);
    return this.http.get<any>(
      `${this.baseApiUrl}/trending/movie/day?api_key=${environment.apiKey}&language=en-US'`,
      {
        headers: httpHeaders,
      }
    );
  }

  getOneFilm(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('accepet', 'application/json');
    httpHeaders.append('Authorization', `Bearer ${environment.token}`);

    return this.http.get<any>(
      `${this.baseApiUrl}/movie/${id}?api_key=${environment.apiKey}&language=en-US'`,
      {
        headers: httpHeaders,
      }
    );
  }
}
