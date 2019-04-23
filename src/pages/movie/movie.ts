import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieInfoPage } from '../Movie-info/Movie-info';

/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {
 //定义电影影院列表
 public list = [];
  data: any = [
    {
      "cinemaNumber": "1",
      "cinemaName": "天河国际影城",
      "cinemaAddress": "武汉市洪山区青菱乡黄家湖西路东澜岸广场",
      "ticketRenewal": "1",
      "catering": "1",
      "snack": "1",
      "IMAX": "1",
      "minPrice": "20",
      "cinemaDistance": "1.3",
      "cinemaCollect": "1"
    },
    {
      "cinemaNumber": "2",
      "cinemaName": "CGV影城（光谷店）",
      "cinemaAddress": "武汉市光谷新技术开发区光谷街23号德国步行街F地块8号楼3-6层",
      "ticketRenewal": "1",
      "catering": "0",
      "snack": "1",
      "IMAX": "1",
      "minPrice": "22",
      "cinemaDistance": "1.8",
      "cinemaCollect": "1"
    },
    {
      "cinemaNumber": "3",
      "cinemaName": "武汉万达影城江汉路悦荟广场店",
      "cinemaAddress": "武汉市江汉区菱角湖万达广场室外步行街B区079号",
      "ticketRenewal": "1",
      "catering": "1",
      "snack": "1",
      "IMAX": "1",
      "minPrice": "35",
      "cinemaDistance": "1.9",
      "cinemaCollect": "0"
    },
    {
      "cinemaNumber": "4",
      "cinemaName": "漫时光",
      "cinemaAddress": "武汉市汉阳区王家湾海天广场A座8楼",
      "ticketRenewal": "1",
      "catering": "1",
      "snack": "1",
      "IMAX": "1",
      "minPrice": "23",
      "cinemaDistance": "3.3",
      "cinemaCollect": "0"
    },
    {
      "cinemaNumber": "5",
      "cinemaName": "万达国际影城(武汉春树里广场店）",
      "cinemaAddress": "武汉市武昌区中北路166号春树里购物中心四层",
      "ticketRenewal": "1",
      "catering": "1",
      "snack": "1",
      "IMAX": "1",
      "minPrice": "19.9",
      "cinemaDistance": "5.8",
      "cinemaCollect": "0"
    }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
   //改变list的值
   for(var i=0;i<10;i++){
    this.list.push(`这是第${i}个影院`);
  }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviePage');
  
   
  }
  //
  gomovieInfo(){
    this.navCtrl.push(MovieInfoPage);
  }

}
