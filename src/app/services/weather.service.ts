import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string)  {
    return this.http.get<WeatherData>('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=f31353994cd4eb0370cd186443bbed8c&units=metric');
  }
}
