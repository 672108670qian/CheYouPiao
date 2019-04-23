import { Component } from '@angular/core';
import { IonicPage, ModalController,NavController} from 'ionic-angular';

import { Platform } from 'ionic-angular';
import { BackButtonService } from "../../services/backButton.service";
import {FormBuilder, Validators, FormGroup} from '@angular/forms';//表单处理

import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
// import { VerificationPage } from '../verification/verification';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private wait: number = 3;
  public countdown: number = this.wait;
  public timeValue = "获取验证码";
  public isReGetCode: boolean = false; // 是否是重新获取验证码
  public disabled: boolean = false; // 是否设置禁用

  private timer;



  constructor(public modalCtrl:ModalController,
    private backButtonService: BackButtonService,
    public navCtrl: NavController,
    private platform: Platform) {
      this.platform.ready().then(() => {
        this.backButtonService.registerBackButtonAction(null);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(phone:HTMLInputElement,password:HTMLInputElement) {
    if(phone.value.length ==0){
        alert("请输入账号") ;
    }else if(password.value.length ==0){
        alert("请输入密码") ;
    }else{
        let userinfo:string = '手机号' + phone.value +'密码'+ password.value;
        alert(userinfo);
        let modal = this.modalCtrl.create(TabsPage);
        modal.present();
    }
  }
  
/**
   * 获取验证码
   */
  getIdCode() {

    this.isReGetCode = true;
    this.disabled = true;

    if (this.countdown == 0) {
      this.countdown = this.wait;
      if (!this.isReGetCode) {
        this.timeValue = "获取验证码";
      } else {
        this.timeValue = "重新获取";
      }
      this.disabled = false;

      if (this.timer){
        clearTimeout(this.timer);
      }
      return;
    } else {
      this.timeValue = "重新发送 (" + this.countdown + ")";
      this.countdown--;
    }
    //过1秒后执行倒计时函数2 
    this.timer = setTimeout(()=>this.getIdCode(),1000);
  }


   // 跳回至登录页面
goLogin(){
  this.navCtrl.push(LoginPage);
}


}
