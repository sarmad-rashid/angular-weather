import { WeatherData } from './../models/weather.model';
import { WeatherService } from '../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService){}

  /* myWeather: any;
  temperature: number = 0; */
  city: string = 'Stockholm';
  weatherData?: WeatherData;
  iconUrl: string = '';

  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.city = '';
  }
  
  onSubmit(){
    this.getWeatherData(this.city);
    this.city = '';
  }

  private getWeatherData(city: string){
    this.weatherService.getWeather(city).subscribe({
      next: (response) => {
        console.log(response);
        this.weatherData = response;
        this.iconUrl = 'https://openweathermap.org/img/wn/' + this.weatherData.weather[0].icon + '@2x.png';
        /* this.myWeather = response;
        this.temperature = this.myWeather.main.temp; 
        */
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    })
  }
}
