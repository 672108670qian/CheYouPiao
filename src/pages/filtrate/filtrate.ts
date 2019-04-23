import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController} from 'ionic-angular';

/**
 * Generated class for the FiltratePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filtrate',
  templateUrl: 'filtrate.html',
})
export class FiltratePage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl: ViewController
     ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltratePage');
  }

  dismiss() {
    this.viewCtrl.dismiss(FiltratePage);//隐藏modal组件
  }  

}
