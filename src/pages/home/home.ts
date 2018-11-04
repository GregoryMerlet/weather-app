import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';

import {WeatherProvider} from "../../providers/weather/weather";
import {WeatherDetailsPage} from "../weather-details/weather-details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options : GeolocationOptions;
  currentPos : Geoposition;
  localWheather: any;
  favoriteCitiesWeather: any;
  errorMessage: string;
  geolocationError: string;
  localWeatherError: string;
  favoriteCitiesWeatherError: string;

  constructor(public navCtrl: NavController, public weather: WeatherProvider, private geolocation: Geolocation) {

  }

  ionViewWillEnter() {
    this.getWeather();
    this.getFavoriteCitiesWeather();
  }

  getWeather(){
    this.options = {
      enableHighAccuracy : true
    };

    this.geolocation.getCurrentPosition(this.options)
      .then(
        (pos : Geoposition) => {
            this.currentPos = pos;
            this.getLocalWeather();
        },
        (err : PositionError)=> {
            this.geolocationError = err.message;
        });
  }

  getLocalWeather(){
    this.weather.getCityWeather(this.currentPos.coords.latitude.toString(), this.currentPos.coords.longitude.toString())
      .subscribe(
        result => this.localWheather = result,
        error => this.localWeatherError = <any>error);
  }

  getFavoriteCitiesWeather(){
    this.weather.getCitiesWeather(['524901','703448','2643743'])
      .subscribe(
        citiesWeather => this.favoriteCitiesWeather = citiesWeather.list,
        error => this.favoriteCitiesWeatherError = <any>error);
  }

  itemClick(item){
    if(item === -1){
      this.navCtrl.push(WeatherDetailsPage, {weatherInfos: this.localWheather});
    } else {
      this.navCtrl.push(WeatherDetailsPage, {weatherInfos: this.favoriteCitiesWeather[item]});
    }
  }
}
