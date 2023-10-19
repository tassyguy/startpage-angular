import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { WeatherService } from './weather.service'; // Import your WeatherService

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  location: string = 'Atlanta, GA';
  weather: any;

  constructor(
    private weatherService: WeatherService,
    private http: HttpClient // Inject HttpClient
  ) {}

  ngOnInit(): void {
    this.fetchWeatherData(this.location);
  }

  fetchWeatherData(location: string) {
    this.weatherService.getWeather(location).subscribe((data) => {
      this.weather = data;
    });
  }

  updateLocation(newLocation: string) {
    this.location = newLocation;
    this.fetchWeatherData(newLocation);
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const newLocation = `${latitude},${longitude}`;
          this.updateLocation(newLocation);
        },
        (error) => {
          console.error('Geolocation error:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}
