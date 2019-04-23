import { NgModule } from '@angular/core';

import { PopupMenuComponent } from './popup-menu/popup-menu';
import { SideMenuComponent } from './side-menu/side-menu';
import { EmojiPickerComponent } from './emoji-picker/emoji-picker';
@NgModule({
	declarations: [
    PopupMenuComponent,
    SideMenuComponent,
    EmojiPickerComponent],
	imports: [],
	exports: [
    PopupMenuComponent,
    SideMenuComponent,
    EmojiPickerComponent]
})
export class ComponentsModule {}
