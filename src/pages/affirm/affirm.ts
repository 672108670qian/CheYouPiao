import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PaymentPage } from '../payment/payment';



/**
 * Generated class for the AffirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-affirm',
  templateUrl: 'affirm.html',
})
export class AffirmPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AffirmPage');
  }


  //跳转到付款页面
gopayment(){
  this.navCtrl.push("PaymentPage");
}

}
