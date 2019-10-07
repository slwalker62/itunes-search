import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search-result';
import { ItunesService } from '../itunes.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {
  // Prop for seach box input
  searchInput: string;
  // Prop for search results
  searchResults: SearchResult[];
  // columns to display 
  displayedColumns: string[] = ['name', 'artist', 'album'];

  performedSearch: boolean;

  constructor(private itunesService: ItunesService) { }

  ngOnInit() {
    this.performedSearch = false;
  }

  // Search event on button click
  onSearch() {
    if(!this.performedSearch){
      if(this.searchInput) {
        // Call itunes service with search input
        this.itunesService.getSongs(this.searchInput)
          // Retrieve result from service
          .subscribe(
            res => {
              this.searchResults = res['results'].map(
                item => {
                  return new SearchResult(
                                item.trackName, 
                                item.artistName, 
                                item.collectionName
                              )
                }
              )        
            }
          );
          this.performedSearch = true;
      }  
    } else {
      // Clear out search results
      this.searchResults = null;
      // Flip back flag signalling search performed
      this.performedSearch = false;
    }
  }

}
