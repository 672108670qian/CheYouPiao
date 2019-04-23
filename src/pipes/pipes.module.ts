import { NgModule } from '@angular/core';
import { MomentPipe } from './moment.pipe';
// @NgModule({
// 	declarations: [RelativeTimePipe],
// 	imports: [],
// 	exports: [RelativeTimePipe]
// })
// export class PipesModule {}
export const pipes = [
	MomentPipe
  ];
  
  @NgModule({
	declarations:[pipes],
	exports: [pipes]
  })
  
  export class PipesModule { }
