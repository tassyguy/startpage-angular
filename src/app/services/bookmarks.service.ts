import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  private bookmarksUrl = 'assets/data/bookmarks.json'; // Adjust the path to match your file location

  constructor(private http: HttpClient) {}

  getBookmarks(): Observable<any[]> {
    return this.http.get<any[]>(this.bookmarksUrl);
  }
}
