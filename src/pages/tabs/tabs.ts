import { Component,ViewChild } from '@angular/core';
import { Platform, Tabs } from 'ionic-angular';


import { HomePage } from '../home/home';
import { MoviePage } from '../movie/movie';
import { MessagePage } from '../message/message';
import { OrderPage } from '../order/order';
import { SettingPage } from '../setting/setting';
import { BackButtonService } from "../../services/backButton.service";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];
  @ViewChild('myTabs')tabRef:Tabs;



  constructor(public backButtonService: BackButtonService,
    private platform: Platform) {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: '车有票',
        tabIcon: 'cyp'
      },
      { 
        root: MoviePage,
        tabTitle: '看电影',
        tabIcon: 'dy'
      },
      { 
        root: MessagePage,
        tabTitle: '私信',
        tabIcon: 'sx'
      },
      { 
        root: OrderPage,
        tabTitle: '订单',
        tabIcon: 'dd'
      },
      { 
        root: SettingPage,
        tabTitle: '我的',
        tabIcon: 'wd'
      }
    ];
    
    this.platform.ready().then(() => {
      this.backButtonService.registerBackButtonAction(this.tabRef);
    });

  }
}
