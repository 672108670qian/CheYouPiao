
import { NgModule, ErrorHandler } from '@angular/core';
 //@angular/core是一个npm的模块，定义了angular的核心功能

import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, 
  IonicErrorHandler
 } from 'ionic-angular';
import { MyApp } from './app.component';
import { BackButtonService } from '../services/backButton.service';
import { HttpModule } from '@angular/http';


import { LoginPage } from '../pages/login/login';//登录
import { RegisterPage } from '../pages/register/register';//注册
import { VerificationPage } from '../pages/verification/verification';//验证码
import { HomePage } from '../pages/home/home';//车有票
import { TabsPage } from '../pages/tabs/tabs';//tabs
import { MoviePage } from '../pages/movie/movie';//看电影
import { ChatPage } from '../pages/chat/chat';//私信
import { MessagePage } from '../pages/message/message';//私信——>聊天界面
import { OrderPage } from '../pages/order/order'//订单
import { SettingPage } from '../pages/setting/setting';//我的
// import { ChatPage } from '../pages/chat/chat';//聊天
import { PersonPage } from '../pages/person/person';//头像——>个人资料界面

import { InvitationPage } from '../pages/invitation/invitation';//订单——>邀请订单
import { OrderInfoPage } from '../pages/order-info/order-info';//邀请订单——>邀请订单详情
import { InvitedPage } from '../pages/invited/invited';//订单——>应邀订单
import { InvitedInfoPage } from '../pages/invited-info/invited-info';//应邀订单——>应邀订单详情

import { MaterialPage } from '../pages/material/material';//我的——>用户资料
import { MovieInfoPage } from '../pages/movie-info/movie-info';//私人影院——>私人影院套餐
import { DetailsPage } from '../pages/details/details';//私人影院套餐——>套餐详情
import { SharePage } from '../pages/share/share';//套餐详情——>分享他人
import { AffirmPage } from '../pages/affirm/affirm';//分享他人——>确认订单
import { PaymentPage } from '../pages/payment/payment';//确认订单——>待付款
import { FinishPage } from '../pages/finish/finish';//待付款——>完成邀请



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PipesModule } from '../pipes/pipes.module';
import { ChatPageModule } from '../pages/chat/chat.module';
import { MessagePageModule } from '../pages/message/message.module';
import { PersonPageModule } from '../pages/person/person.module';
import { DetailsPageModule } from '../pages/details/details.module';
import { OrderInfoPageModule } from '../pages/order-info/order-info.module';
import { MovieInfoPageModule } from '../pages/movie-info/movie-info.module';
import { InvitedInfoPageModule } from '../pages/invited-info/invited-info.module';//应邀订单——>应邀订单详情
import { SharePageModule } from '../pages/share/share.module';
import { MaterialPageModule } from '../pages/material/material.module';
import { AffirmPageModule } from '../pages/affirm/affirm.Module';//分享他人——>确认订单
import { PaymentPageModule } from '../pages/payment/payment.module';//确认订单——>待付款
import { FinishPageModule } from '../pages/finish/finish.module';//待付款——>完成邀请
import { InvitationPageModule } from '../pages/invitation/invitation.Module';//订单——>应邀订单
import { InvitedPageModule } from '../pages/invited/invited.Module';//订单——>应邀订单

// import { EmojiProvider } from '../providers/emoji/emoji';
// import { ChatService } from '../providers/chat-service/chat-service';
// import { EmojiPickerComponent } from '../components/emoji-picker/emoji-picker';
// import { RelativeTimePipe } from '../pipes/relative-time/relative-time';



@NgModule({
  //declarations 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MoviePage,
    
    OrderPage,
    SettingPage,
    LoginPage,
    RegisterPage,
    VerificationPage
   
  ],
  //imports 本模块声明的组件模板需要的类所在的其它模块。
  imports: [
    BrowserModule,  HttpModule,PipesModule,
    ChatPageModule,
    MessagePageModule,
    DetailsPageModule,
    MaterialPageModule,
    PersonPageModule,
    SharePageModule,
    OrderInfoPageModule,
    AffirmPageModule,
    PaymentPageModule,
    FinishPageModule,
    InvitationPageModule,
    InvitedPageModule,
    MovieInfoPageModule,
    InvitedInfoPageModule,

    // MovieInfoPageModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: ' ',//配置返回按钮

      backButtonIcon:'md-arrow-back',//配置返回按钮图标
      modalEnter: 'modal-slide-in',//呈现模态时使用的转换的名称。
      modalLeave: 'modal-slide-out',//
      tabsPlacement: 'bottom',//配置tabs切换栏的位置
      
      // tabsLayout:'icon-left',
      preloadModules: true,
      pageTransition: 'io/s-transition',//更改页面时使用的转换名称。可用选项："ios-transition"，"md-transition"，"wp-transition"
      swipeBackEnabled:"true",//配置ios轻扫返回的功能
      tabsHideOnSubPages:'true',//隐藏全部子页面tabs
      DisallowOverscroll:'true',
      mode:"ios"//配置所有系统用ios模式
    }),

  
  
  ],
 
  bootstrap: [IonicApp], //bootstrap 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置 bootstrap 属性。
  entryComponents: [   /*配置不会在模板中使用的组件 */
    MyApp,
    HomePage,
    TabsPage,
    MoviePage,
    MovieInfoPage,
    MessagePage,
    OrderPage,
    OrderInfoPage,
    InvitationPage,
    InvitedPage,
    InvitedInfoPage,
    
    DetailsPage,
    AffirmPage,
    PaymentPage,
    FinishPage,
    SettingPage,
    MaterialPage,
    LoginPage,
    PersonPage,
    RegisterPage,
    SharePage,
    VerificationPage,
    ChatPage
    // ChatComponent
  //   EmojiPickerComponent
  ],
  //providers 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
  providers: [
    StatusBar,
    SplashScreen,
    BackButtonService,//返回按钮
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    // EmojiProvider,//聊天表情
    // ChatService//聊天服务

    
  ]
})
export class AppModule {}
