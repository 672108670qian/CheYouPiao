import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderInfoPage } from '../order-info/order-info';

/**
 * Generated class for the InvitationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invitation',
  templateUrl: 'invitation.html',
})
export class InvitationPage {

  invitationArray:string[]=['all','daiYingYao','daiXiaoFei','yiGuoQI','TuiKuan'];
  invitation:string=this.invitationArray[0];
  // data:any=[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitationPage');
  }

  //固定分享首页
  swipeEvent(event) {

    //向左滑
    if (event.direction == 2) {
      if (this.invitationArray.indexOf(this.invitation) < 2) {
        this.invitation = this.invitationArray[this.invitationArray.indexOf(this.invitation) + 1];
      }
    }
    //向右滑
    if (event.direction == 4) {
      if (this.invitationArray.indexOf(this.invitation) > 0) {
        this.invitation = this.invitationArray[this.invitationArray.indexOf(this.invitation) - 1];
      }
    }
  }


  //跳转至订单详情页面
  goOrderInfo(){
    this.navCtrl.push(OrderInfoPage);
  }
}
