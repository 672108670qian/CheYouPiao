import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { FormControl, FormBuilder } from '@angular/forms';
// import {NgModule} from "@angular/compiler/src/core";
// import { MessagePage } from '../Message/Message';


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
 // mock 数据
 chats = [{
  id: '001',
  imageUrl: 'assets/imgs/material/tx2.jpg',
  title: '房东',
  lastMessage: '这个月的房租怎么还没有交?',
  timestamp: new Date()
},
  {
    id: '002',
    imageUrl: 'assets/imgs/material/tx3.jpg',
    title: '房产中介',
    lastMessage: '上次给你推荐的房子，你看了没有?我这边有新的房源，你要不要过来看看？',
    timestamp: new Date()
  },
  {
    id: '003',
    imageUrl: 'assets/imgs/material/tx4.jpg',
    title: '公司前台',
    lastMessage: '你有新的快递，请注意查收',
    timestamp: new Date()
  }];


   constructor(public navCtrl: NavController, public navParams: NavParams) {

    // this.data = navParams.get('test');
   }

   ionViewDidLoad(navParams: NavParams) {
    console.log('ionViewDidLoad ChatPage');
   }
    // 跳转到message界面并且传值
  goMessage(chat) {
    this.navCtrl.push("MessagePage", {chatId: chat.id});
  }

 }
