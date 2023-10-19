import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksContainerComponent } from './bookmarks-container.component';
import { BookmarksModule } from '../bookmarks/bookmarks.module'; // Import the module that contains the BookmarksComponent
import { BookmarksComponent } from '../bookmarks/bookmarks.component';

@NgModule({
  declarations: [BookmarksContainerComponent, BookmarksComponent], // Declare the BookmarksContainerComponent
  imports: [CommonModule, BookmarksModule], // Import required modules, including the BookmarksModule
})
export class BookmarksContainerModule { }
