import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookmarksContainerComponent } from './components/bookmarks-container/bookmarks-container.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchEnginesService } from './services/search-engine.service';
import { FormsModule } from '@angular/forms';
import { BookmarksModule } from './components/bookmarks/bookmarks.module';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [AppComponent, BookmarksContainerComponent, WeatherComponent, SearchBoxComponent],
  imports: [BrowserModule, FormsModule, BookmarksModule, HttpClientModule],
  providers: [SearchEnginesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
