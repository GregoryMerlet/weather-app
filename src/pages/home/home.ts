import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherProvider} from "../../providers/weather/weather";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cityWeather: any;
  citiesWeather: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public weather: WeatherProvider) {

  }

  ionViewWillEnter() {
    this.getWeather();
  }

  getWeather() {
    this.weather.getCityWeather('43.606381', '6.684486')
      .subscribe(
        result => this.cityWeather = result,
        error => this.errorMessage = <any>error);
    this.weather.getCitiesWeather(['524901','703448','2643743'])
      .subscribe(
        citiesWeather => this.citiesWeather = citiesWeather.list,
        error => this.errorMessage = <any>error);
  }

  itemClick(item){
    console.log(item);
  }
}
