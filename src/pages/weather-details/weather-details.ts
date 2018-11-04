import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WeatherProvider} from "../../providers/weather/weather";

@IonicPage()
@Component({
  selector: 'page-weather-details',
  templateUrl: 'weather-details.html'
})
export class WeatherDetailsPage {

  weatherInfos: any;
  weatherForecast: any;
  error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public weather: WeatherProvider) {
    this.weatherInfos = navParams.get('weatherInfos');
  }

  ionViewDidLoad() {
    this.weather.getCityForecast(this.weatherInfos.id)
      .subscribe(
        result => this.weatherForecast = result,
        error => this.error = error);
  }

}
