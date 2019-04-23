import { NgModule,ErrorHandler} from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { ChatPage } from './chat';

@NgModule({
  declarations: [
    ChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
  ],
  entryComponents: [
    ChatPage,
  ],
})
export class ChatPageModule {}
