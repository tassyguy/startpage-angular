import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './bookmarks.component';

@NgModule({
  declarations: [BookmarksComponent], // Declare the BookmarksComponent
  imports: [CommonModule], // Import required modules
  exports:  [BookmarksComponent] // Export the component if needed
})
export class BookmarksModule { }
