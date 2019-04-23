import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { InvitationPage } from '../invitation/invitation';


/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
   //定义数组数据
   public list=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     //改变list的值
     for(var i=0;i<10;i++){
      this.list.push(`这是第${i}个订单`);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  
  //跳转至邀请订单页面
  goinvitation(){
    this.navCtrl.push(InvitationPage);
  }


}
