import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WeatherDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather-details',
  templateUrl: 'weather-details.html',
})
export class WeatherDetailsPage {

  weatherInfos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.weatherInfos = navParams.get('weatherInfos');
    console.log(this.weatherInfos);
  }

  ionViewDidLoad() {

  }

}
