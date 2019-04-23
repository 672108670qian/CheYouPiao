import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvitedInfoPage } from './invited-info';

@NgModule({
  declarations: [
    InvitedInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(InvitedInfoPage),
  ],
})
export class InvitedInfoPageModule {}
