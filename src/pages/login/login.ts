import { Component } from '@angular/core';
import { IonicPage, ModalController,NavController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Platform } from 'ionic-angular';
import { BackButtonService } from "../../services/backButton.service";
import {FormBuilder, Validators, FormGroup} from '@angular/forms';//表单处理

import { RegisterPage } from '../register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    RegisterPage;

  constructor(public modalCtrl:ModalController,
              private backButtonService: BackButtonService,
              public navCtrl: NavController,
              private platform: Platform,
              private formBuilder: FormBuilder,
            //   private viewCtrl: ViewController,
            //   private events: Events,
            //   private httpService: HttpService,
            //   private storageService: StorageService,
            //   private nativeService: NativeService
            ) {
        this.platform.ready().then(() => {
            this.backButtonService.registerBackButtonAction(null);
        });
        // this.loginForm = formBuilder.group({
        //     username: ['', Validators.compose([Validators.minLength(0), Validators.maxLength(16), Validators.required,])],
        //     password: ['', Validators.compose([Validators.required, Validators.minLength(0)])]
        //   });
        //   this.username = this.loginForm.controls['username'];
        //   this.password = this.loginForm.controls['password'];
      
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  logIn(username:HTMLInputElement,password:HTMLInputElement) {
    if(username.value.length ==0){
        alert("请输入账号") ;
    }else if(password.value.length ==0){
        alert("请输入密码") ;
    }else{
        let userinfo:string = '用户名' + username.value +'密码'+ password.value;
        alert(userinfo);
        let modal = this.modalCtrl.create(TabsPage);
        modal.present();
    }

}

 // 跳转至注册界面
goRegisterPage(){
    this.navCtrl.push(RegisterPage);
}


}
