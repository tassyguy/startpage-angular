// search-engines.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchEngine } from '../components/search-box/search-box.interface'; // Import the SearchEngine interface

@Injectable({
  providedIn: 'root'
})
export class SearchEnginesService {
  private searchEnginesUrl = 'assets/data/searchEngines.json';

  constructor(private http: HttpClient) {}

  getSearchEngines(): Observable<SearchEngine[]> {
    return this.http.get<SearchEngine[]>(this.searchEnginesUrl);
  }
}
