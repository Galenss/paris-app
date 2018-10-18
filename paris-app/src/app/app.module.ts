import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyHttpService } from './utility/service/myhttp.service'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CartPage } from '../pages/cart/cart';
import { DetailPage } from '../pages/detail/detail';
import { IndexPage } from '../pages/index';
import { LoginPage } from '../pages/login/login';
import { ProductPage } from '../pages/product/product';
import { SettingsPage } from '../pages/settings/settings';
import { UserPage } from '../pages/user/user';
import { UserCenterPage } from '../pages/user-center/user-center';
import { NotFoundPage } from '../pages/not-found/not-found';
import { PayPage } from '../pages/pay/pay';
import { PhotoDetailPage } from '../pages/photo-detail/photo-detail';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    PhotoDetailPage,
    NotFoundPage,
    CartPage,
    DetailPage,
    IndexPage,
    LoginPage,
    ProductPage,
    SettingsPage,
    UserPage,
    UserCenterPage,
    NotFoundPage,
    PayPage,
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PhotoDetailPage,
    CartPage,
    DetailPage,
    IndexPage,
    LoginPage,
    ProductPage,
    SettingsPage,
    UserPage,
    UserCenterPage,
    NotFoundPage,
    PayPage,
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
