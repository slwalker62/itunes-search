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

        
    let headers = new HttpHeaders();
    let params = new HttpParams();
    params = params.append('term', searchInput);
    params = params.append('media', 'music');
    params = params.append('limit', '3');
    params = params.append('callback', 'CALLBACK_JSON');

    //let x = this.http.get(this.searchUrl, {params: params}).subscribe(res=> { console.log(res);});

//.map(item => {return new SearchResult})
   return this.http.jsonp(`${this.searchUrl}?term=${searchInput}&media=music&limit=3`, 'callback');
  }
}
