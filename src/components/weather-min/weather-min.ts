import { Component, Input } from '@angular/core';

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

  constructor() {
  }

}
