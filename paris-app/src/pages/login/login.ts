import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/service/myhttp.service'


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  uname="";
  upwd="";

  constructor(
    private myService:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(){
    //获取用户名和密码 发给服务器
    var params = "uname="+this.uname+"&upwd="+this.upwd;
    var url = "http://localhost/ajia_code/data/user/login.php?"+params;
    
    this.myService.sendRequest(
      url,
      (result)=>{
        console.log(result)
        if(result.code == 200){
          //登录成功 返回上一页
          if(this.navCtrl.canGoBack()){
            this.navCtrl.pop()
          }
        }else{
          //显示一个toast
          this.myService.showToast('登录失败!')
        }
      }
    )

    //根据服务器端返回的结果 做处理
  }

}
