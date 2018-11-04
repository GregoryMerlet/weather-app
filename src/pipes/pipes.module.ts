import { NgModule } from '@angular/core';
import { GetWeekDayPipe } from './get-week-day/get-week-day';
import { GetIconPipe } from './get-icon/get-icon';
@NgModule({
	declarations: [GetWeekDayPipe,
    GetIconPipe],
	imports: [],
	exports: [GetWeekDayPipe,
    GetIconPipe]
})
export class PipesModule {}
