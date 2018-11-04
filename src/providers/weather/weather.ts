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
    console.log('Hello WeatherProvider Provider');
  }

  getCityWeather(city: string): Observable<{}> {
    let params = new HttpParams()
      .set("q",city)
      .set("appid", this.apiKey)
      .set("units", "metric");
    return this.http.get(`${this.apiUrl}weather`, { params: params }).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getCitiesWeather(cities: Array<string>){
    let params = new HttpParams()
      .set("id",cities.toString())
      .set("appid", this.apiKey)
      .set("units", "metric");
    return this.http.get(`${this.apiUrl}group`, { params: params }).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
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
