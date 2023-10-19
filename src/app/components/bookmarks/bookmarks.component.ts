import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../../services/bookmarks.service'; // Import your BookmarkService or data source service
import { Bookmark } from './bookmarks.interface'; // Assuming you have a Bookmark model

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent implements OnInit {
  bookmarks: Bookmark[] = [];

  constructor(private bookmarkService: BookmarksService) {} // Inject your BookmarkService

  ngOnInit() {
    this.loadBookmarks();
  }

  loadBookmarks() {
    this.bookmarkService.getBookmarks().subscribe((bookmarks: Bookmark[]) => {
      this.bookmarks = bookmarks;
    });
  }
}
