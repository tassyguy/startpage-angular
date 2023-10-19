import { Component, Input } from '@angular/core';
import { Bookmark } from '../bookmarks/bookmarks.interface';

@Component({
  selector: 'app-bookmarks-container',
  templateUrl: './bookmarks-container.component.html',
  styleUrls: ['./bookmarks-container.component.css']
})
export class BookmarksContainerComponent {
  @Input() bookmarks: Bookmark[] = []; // Define the array of bookmarks
}
