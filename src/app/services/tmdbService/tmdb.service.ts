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
      `${this.baseApiUrl}/upcoming?api_key=${environment.apiKey}`,
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
      `${this.baseApiUrl}/now_playing?api_key=${environment.apiKey}`,
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
      `${this.baseApiUrl}/top_rated?api_key=${environment.apiKey}`,
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
      `${this.baseApiUrl}/popular?api_key=${environment.apiKey}`,
      {
        headers: httpHeaders,
      }
    );
  }

  randomFilm() {
    const api =
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('accepet', 'application/json');
    httpHeaders.append('Authorization', `Bearer ${environment.token}`);
    return this.http.get<any>(`${api}&api_key=${environment.apiKey}`, {
      headers: httpHeaders,
    });
  }
}
