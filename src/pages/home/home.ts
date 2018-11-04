import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherProvider} from "../../providers/weather/weather";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cityWeather: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public weather: WeatherProvider) {

  }

  ionViewWillEnter() {
    this.getWeather("London");
  }

  getWeather(city: string) {
    this.weather.getCityWeather(city)
      .subscribe(
        result => this.cityWeather = result,
        error => this.errorMessage = <any>error);
  }

  itemClick(item){
    console.log(item);
  }
}
