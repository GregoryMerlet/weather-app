import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getIcon',
})
export class GetIconPipe implements PipeTransform {
  transform(value: string, ...args) {
    let iconName;

    switch(value){
      case '01d':
        iconName = 'clear_sky';
        break;
      case '01n':
        iconName = 'clear_sky_night';
        break;
      case '02d':
        iconName = 'few_clouds';
        break;
      case '02n':
        iconName = 'few_clouds_night';
        break;
      case '03d':
        iconName = 'scattered_clouds';
        break;
      case '03n':
        iconName = 'scattered_clouds';
        break;
      case '04d':
        iconName = 'broken_clouds';
        break;
      case '04n':
        iconName = 'broken_clouds';
        break;
      case '09d':
        iconName = 'shower_rain';
        break;
      case '09n':
        iconName = 'shower_rain';
        break;
      case '10d':
        iconName = 'rain';
        break;
      case '10n':
        iconName = 'rain_night';
        break;
      case '11d':
        iconName = 'thunderstorm';
        break;
      case '11n':
        iconName = 'thunderstorm';
        break;
      case '13d':
        iconName = 'snow';
        break;
      case '13n':
        iconName = 'snow';
        break;
      case '50d':
        iconName = 'mist';
        break;
      case '50n':
        iconName = 'mist';
        break;
    }

    return `assets/imgs/${iconName}.svg`;
  }
}
