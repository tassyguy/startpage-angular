// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private openWeatherApiKey = 'd25e7626def4d1e8f3d6681ad1be881b';
  private openWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    const params = {
      q: city,
      appid: this.openWeatherApiKey,
    };

    return this.http.get(this.openWeatherApiUrl, { params });
  }
}
