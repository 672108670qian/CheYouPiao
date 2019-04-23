import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ChatPage } from '../chat/chat';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  // mock 数据
  messages = [{
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
      imageUrl: 'assets/imgs/material/tx3.jpg',
      title: '公司前台',
      lastMessage: '你有新的快递，请注意查收',
      timestamp: new Date()
    }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

//跳转至个人资料（测试传参）
goChatPage(){
  this.navCtrl.push('ChatPage',{test:"aaa"});
}

}


// export class MessagePage {
//   // toUser : {toUserId: string, toUserName: string};

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//     // this.toUser = {
//     //   toUserId:'210000198410281948',
//     //   toUserName:'Hancock'
//     // }
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad MessagePage');
//   }
//   openChat() {
    
//     this.navCtrl.push(ChatPage);
//   }

// }
