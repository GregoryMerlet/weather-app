import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WeatherDetailsPage} from "../pages/weather-details/weather-details";
import { WeatherProvider } from '../providers/weather/weather';
import { WeatherMinComponent } from "../components/weather-min/weather-min";
import {GetWeekDayPipe} from "../pipes/get-week-day/get-week-day";
import {GetIconPipe} from "../pipes/get-icon/get-icon";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WeatherDetailsPage,
    WeatherMinComponent,
    GetWeekDayPipe,
    GetIconPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WeatherDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    Geolocation
  ]
})
export class AppModule {}
