import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = '8bc778bbac5322ebf2cc2ee51724786f';

  constructor(public http: HttpClient) {

  }

  getCityWeather(lat: string, lon: string): Observable<{}> {
    let params = new HttpParams()
      .set("lat",lat)
      .set("lon", lon)
      .set("appid", this.apiKey)
      .set("units", "metric")
      .set("lang", "fr");
    return this.http.get(`${this.apiUrl}weather`, { params: params }).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getCitiesWeather(cities: Array<string>){
    let params = new HttpParams()
      .set("id",cities.toString())
      .set("appid", this.apiKey)
      .set("units", "metric")
      .set("lang", "fr");
    return this.http.get(`${this.apiUrl}group`, { params: params }).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getCityForecast(id: string): Observable<{}> {
    let params = new HttpParams()
      .set("id",id)
      .set("appid", this.apiKey)
      .set("units", "metric")
      .set("lang", "fr");
    return this.http.get(`${this.apiUrl}forecast`, { params: params }).pipe(
      map(this.extractFiveDays),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private extractFiveDays(res: Response) {
    let weatherList = res['list'];

    let today = new Date();

    let result = new Array();

    for(let i = 1; i < 6; i++){
      let dayDate = new Date();
      dayDate.setDate(today.getDate() + i);
      let month = (dayDate.getMonth()+1 < 10) ? `0${dayDate.getMonth()+1}` : dayDate.getMonth()+1;
      let date = (dayDate.getDate() < 10) ? `0${dayDate.getDate()}` : dayDate.getDate();

      weatherList.forEach(day => {
        if(day.dt_txt === `${dayDate.getFullYear()}-${month}-${date} 12:00:00`)
          result.push(day);
      });
    }

    return result || [];
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
