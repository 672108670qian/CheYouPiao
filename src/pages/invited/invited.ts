import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InvitedInfoPage } from '../invited-info/invited-info';

/**
 * Generated class for the InvitedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invited',
  templateUrl: 'invited.html',
})
export class InvitedPage {
  invitedArray:string[]=['all','weiYingYao','daiXiaoFei','yiGuoQI','TuiKuan'];
  invited:string=this.invitedArray[0];
  // data:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitedPage');
  }

  //固定分享首页
  swipeEvent(event) {

    //向左滑
    if (event.direction == 2) {
      if (this.invitedArray.indexOf(this.invited) < 2) {
        this.invited = this.invitedArray[this.invitedArray.indexOf(this.invited) + 1];
      }
    }
    //向右滑
    if (event.direction == 4) {
      if (this.invitedArray.indexOf(this.invited) > 0) {
        this.invited = this.invitedArray[this.invitedArray.indexOf(this.invited) - 1];
      }
    }
  }


  goInvitedInfo(){
    this.navCtrl.push(InvitedInfoPage);
  }

}
