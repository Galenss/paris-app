// 创建一个服务类
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {LoadingController,ToastController} from 'ionic-angular'

@Injectable()

export class MyHttpService{
  constructor(
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private myHttp:HttpClient){    
  }
  
  //显示一个toast
  showToast(msg){
    var myToast = this.toastCtrl.create({
      message:msg,
      duration:2000
    });
    myToast.present()
  }


  //准备一个方法，用来处理网络请求
  sendRequest(url,handle){
    //显示loading
    var myLoading = this.loadingCtrl.create({
      content:'正在加载数据...'
    })
    myLoading.present()

    this.myHttp.get(url,{withCredentials:true})
    .subscribe((result)=>{
      //关闭loading
      myLoading.dismiss()
      //拿到服务器的结果后，根据特定的api来做处理
      handle(result)
    })
  }


}
