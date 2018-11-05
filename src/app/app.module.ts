import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { File } from '@ionic-native/file';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WeatherDetailsPage} from "../pages/weather-details/weather-details";
import { WeatherProvider } from '../providers/weather/weather';
import { WeatherMinComponent } from "../components/weather-min/weather-min";
import {GetWeekDayPipe} from "../pipes/get-week-day/get-week-day";
import {GetIconPipe} from "../pipes/get-icon/get-icon";
import {CitySelectPage} from "../pages/city-select/city-select";
import { FavoriteCitiesProvider } from '../providers/favorite-cities/favorite-cities';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WeatherDetailsPage,
    WeatherMinComponent,
    GetWeekDayPipe,
    GetIconPipe,
    CitySelectPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WeatherDetailsPage,
    CitySelectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    Geolocation,
    File,
    FavoriteCitiesProvider
  ]
})
export class AppModule {}
