import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { AffirmPage } from '../affirm/affirm';

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  shareArray:string[]=['lately','all'];
  share:string=this.shareArray[0];
  // data:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
 
      
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }


//固定分享首页
  swipeEvent(event) {

    //向左滑
    if (event.direction == 2) {
      if (this.shareArray.indexOf(this.share) < 2) {
        this.share = this.shareArray[this.shareArray.indexOf(this.share) + 1];
      }
    }
    //向右滑
    if (event.direction == 4) {
      if (this.shareArray.indexOf(this.share) > 0) {
        this.share = this.shareArray[this.shareArray.indexOf(this.share) - 1];
      }
    }
  }


  //跳转确认订单页面
  goAffirm(){
    this.navCtrl.push(AffirmPage);
  }

}
