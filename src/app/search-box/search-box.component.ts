import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search-result';
import { ItunesService } from '../itunes.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  // Input field in search box
  searchInput: string;
  // Member for search reslt bindings
  searchResults: SearchResult[];
  displayedColumns: string[] = ['name', 'artist', 'album'];

  constructor(private itunesService: ItunesService) { }

  ngOnInit() {
  }

  // Search event on button click
  onSearch(){
    // Call itunes service with search input
    this.itunesService.getSongs(this.searchInput)
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
  }

}
