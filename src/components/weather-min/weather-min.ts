import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the WeatherMinComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'weather-min',
  templateUrl: 'weather-min.html'
})
export class WeatherMinComponent {

  @Input('cityName') cityName: string;
  @Input('weatherIcon') weatherIcon: string;
  @Input('temperature') temperature: number;
  imageSrc: string;

  constructor() {
  }

  getImageName(icon){
    switch(icon){
      case '01d':
        return 'clear_sky';
      case '01n':
        return 'clear_sky_night';
      case '02d':
        return 'few_clouds';
      case '02n':
        return 'few_clouds_night';
      case '03d':
        return 'scattered_clouds';
      case '03n':
        return 'scattered_clouds';
      case '04d':
        return 'broken_clouds';
      case '04n':
        return 'broken_clouds';
      case '09d':
        return 'shower_rain';
      case '09n':
        return 'shower_rain';
      case '10d':
        return 'rain';
      case '10n':
        return 'rain_night';
      case '11d':
        return 'thunderstorm';
      case '11n':
        return 'thunderstorm';
      case '13d':
        return 'snow';
      case '13n':
        return 'snow';
      case '50d':
        return 'mist';
      case '50n':
        return 'mist';
    }
  }

  getImageSrc(icon){
    return `/assets/imgs/${this.getImageName(icon)}.svg`;
  }

  ngAfterViewInit(){
    console.log("test");
  }

}
