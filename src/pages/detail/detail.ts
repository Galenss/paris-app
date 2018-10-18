import { Component } from '@angular/core';
import { ToastController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { NotFoundPage } from '../not-found/not-found'
import { CartPage } from '../cart/cart'
import {LoginPage} from '../login/login'

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  details = {};
  //保存 供模板使用
  pageCart = CartPage;
  pageNotFound = NotFoundPage;

  constructor(
    private toastCtrl:ToastController,
    public myHttp: HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    // console.log(this.navParams.data.pid);
    var url = "http://localhost:5000/product/details?pid=" + this.navParams.data.pid;

    this.myHttp.get(url).subscribe((result:any)=>{
      // console.log(result);
      if(result.code==1){
          this.details=result.msg[0];
          // console.log(this.details);
      }else{
          alert('error');
      }
    });

    
  }
  

}
