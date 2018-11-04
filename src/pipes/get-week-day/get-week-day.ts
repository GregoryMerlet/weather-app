import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getWeekDay',
})
export class GetWeekDayPipe implements PipeTransform {
  transform(value: number, ...args) {
    let date = new Date(value*1000);

    switch(date.getDay()){
      case 0:
        return 'Dimanche';
      case 1:
        return 'Lundi';
      case 2:
        return 'Mardi';
      case 3:
        return 'Mercredi';
      case 4:
        return 'Jeudi';
      case 5:
        return 'Vendredi';
      case 6:
        return 'Samedi';
    }
  }
}
