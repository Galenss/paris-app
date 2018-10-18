import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-not-found',
  templateUrl: 'not-found.html',
})
export class NotFoundPage {
  count = 3;
  myTimer = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.count = 3;
    console.log('ionViewDidLoad NotFoundPage')
     this.myTimer = setInterval(()=>{
      console.log('it is a test');
      this.count--;
      if(this.count == 0){
        //返回上一页
        if(this.navCtrl.canGoBack()){
          this.navCtrl.pop();
        }else{
          clearInterval(this.myTimer)
        }
      }
    },1000);
  }

  //ionic中page类的一个生命周期的钩子函数
  ionViewWillLeave(){
    //结束定时器的运行
    clearInterval(this.myTimer);
  }

}
