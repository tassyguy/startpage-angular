import { Component, OnInit } from '@angular/core';
import { SearchEnginesService } from 'src/app/services/search-engine.service';
import { SearchEngine } from './search-box.interface'; // Import the SearchEngine interface

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  searchEngines: SearchEngine[] = []; // Define the type of searchEngines as an array of SearchEngine

  constructor(private searchEnginesService: SearchEnginesService) {}

  ngOnInit(): void {
    this.searchEnginesService.getSearchEngines().subscribe((data: SearchEngine[]) => {
      this.searchEngines = data;
    });
  }  
}
