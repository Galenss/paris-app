import { Component } from '@angular/core';
import {ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.service'
import {PayPage} from '../pay/pay'


@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {
  list = [];

  constructor(
    private modalCtrl:ModalController,
    private myService:MyHttpService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');
    //获取购物车中的列表数据
    this.myService.sendRequest(
      "http://localhost/ajia_code/data/cart/list.php",
      (result)=>{
        console.log(result)
        //保存购物车列表数据，接下来到视图中显示
        this.list = result.data;
      }
    )
  }

  // 显示一个模态窗
  showModal(){
    //创建(模态窗显示支付页面)
    var myModal = 
      this.modalCtrl.create(PayPage);
    //显示
    myModal.present()
    //接收模态窗关闭时，传来的参数，做处理
    myModal.onDidDismiss((result)=>{
      console.log(result);
      if(result){
        //支付成功，跳转到首页(第0个tab)
        this.navCtrl.parent.select(0)
      }
    })
  }


}
