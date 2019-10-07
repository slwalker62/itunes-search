import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { SearchResult } from './search-result';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  // Base search url
  baseUrl: string = 'https://itunes.apple.com/search';
  searchLimit: number = 3

  constructor(private http: HttpClient) { }
  
  // Return top results based on configurable number
  getSongs(searchTerm: string) {
    console.log(`Searching for ${searchTerm}`);
    // Searching and restricting on song names
    return this.http.jsonp(`${this.baseUrl}?term=${searchTerm}&media=music&entity=song&attribute=songTerm&limit=${this.searchLimit}`, 'callback');
  }
}
