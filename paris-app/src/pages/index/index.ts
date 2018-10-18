import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DetailPage } from '../detail/detail';
import { PhotoDetailPage } from '../photo-detail/photo-detail';
import { CartPage } from '../cart/cart';
/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  // 轮播图
  carousel = [];
  photos = [];
  product = [];
  
  constructor(
    public myHttp: HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    this.myHttp.get('http://localhost:5000/index/carousel').subscribe((result:any)=>{
      // console.log(result);
      this.carousel = result;
    });
    this.myHttp.get('http://localhost:5000/index/photos').subscribe((result: any) => {
      // console.log(result);
      this.photos = result;
      // console.log(this.photos);
    });
    this.myHttp.get('http://localhost:5000/index/product').subscribe((result: any) => {
      // console.log(result);
      this.product = result;
      // console.log(this.product);
    })
  }
  
  jump(id) {
    // 实现跳转并传参
    // console.log(id);
    this.navCtrl.push(DetailPage, { pid: id });
  }

  jumpPhotos(id){
    this.navCtrl.push(PhotoDetailPage, { pid: id });
  }

}
