import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeatherDetailsPage } from './weather-details';

@NgModule({
  declarations: [
    WeatherDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(WeatherDetailsPage),
  ],
})
export class WeatherDetailsPageModule {}
