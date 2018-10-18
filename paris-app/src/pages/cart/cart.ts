import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
// import { MyHttpService } from '../../app/utility/service/myhttp.service'
// import {OrderConfirmPage} from '../order-confirm/order-confirm'

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  constructor(
    public myHttp: HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad CartPage');
    
  }
  //跳转到首页(让ionTabs中第0个tab被选中)
  jumpToIndex(){
    //this.navCtrl.push(IndexPage);
    this.navCtrl.parent.select(0)
  }











}
