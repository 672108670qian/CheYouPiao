import { Component } from '@angular/core';
import { NavController,PopoverController,ModalController } from 'ionic-angular';
import { Http, Response } from '@angular/http';

import { PersonPage } from '../person/person';
import { FiltratePage } from '../filtrate/filtrate';



@Component({
  
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    // 接收数据用
    listData:Object;

    homeArray:string[]=['hydt','fjdr'];
    home:string=this.homeArray[0];
    data:any=[
      

      

    ];
  //注入依赖
  constructor(public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              public modalCtrl: ModalController,//构造控制器
              private http:Http
    ) {

  }
  
  swipeEvent(event) {

    //向左滑
    if (event.direction == 2) {
      if (this.homeArray.indexOf(this.home) < 2) {
        this.home = this.homeArray[this.homeArray.indexOf(this.home) + 1];
      }
    }
    //向右滑
    if (event.direction == 4) {
      if (this.homeArray.indexOf(this.home) > 0) {
        this.home = this.homeArray[this.homeArray.indexOf(this.home) - 1];
      }
    }
  }
  ionViewDidLoad() { 
    // 网络请求
     this.http.request('http://jsonplaceholder.typicode.com/photos') 
     .subscribe((res: Response) => {
        this.listData = res.json();
     });
    }

    
     //跳转到个人详情页面
  goperson(){
    this.navCtrl.push('PersonPage', {
      test : "刘涛"
    });
  }
//九宫格参考网址https://blog.csdn.net/bigname22/article/details/78812986



  //筛选弹框 这里使用modal方法


  openModal(){

    let modal = this.modalCtrl.create(FiltratePage);//创建新的页面——ModalPage
    modal.present();//页面展示
  
   }

  }
