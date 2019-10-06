import { Injectable } from '@angular/core';
import { SearchResult } from './search-result';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  constructor() { }

  getSongs(searchInput: string): SearchResult[] {
    return [
      {song:'Song1', artist:'artist1', album:'album1'}   
    ];
  }
}
