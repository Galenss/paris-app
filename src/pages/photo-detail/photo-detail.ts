import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the PhotoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo-detail',
  templateUrl: 'photo-detail.html',
})
export class PhotoDetailPage {
  photodetail = {};
  imgs = [];
  constructor(
    public myHttp: HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoDetailPage');
    // console.log(this.navParams.data.pid);
    var url = "http://localhost:5000/photos/details?pid=" + this.navParams.data.pid;

    this.myHttp.get(url).subscribe((result:any)=>{
      // console.log(result);
      if(result.code==1){
          this.photodetail=result.msg.detail;
          // console.log(this.photodetail);
          this.imgs=result.msg.imgs;
          // console.log(this.imgs);
      }else{
          alert('error');
      }
    });
  }

}
