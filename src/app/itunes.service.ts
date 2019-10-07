import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { SearchResult } from './search-result';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  searchUrl: string = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) { }

  getSongs(searchInput: string) {
   return this.http.jsonp(`${this.searchUrl}?term=${searchInput}&media=music&limit=3`, 'callback');
  }
}
