import { Component } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { NavParams, ViewController } from 'ionic-angular';
import { Commodity } from '../commodity.modal'
import {Cart} from '../Cart.modal';
/**
 * 加入购物车时弹出的对话确认框页面
 */
@Component({
  templateUrl: 'modalcontentpage.html'
})
export class ModalContentPage {
  character;
  private goods:Commodity;
  private goodsNum:number =1;
  private goodsType:string = 'pepperoni';
  constructor(public params: NavParams, public viewCtrl: ViewController ) {
    this.goods = this.params.get("param");
  }

  //关闭窗口
  dismiss() {
    this.viewCtrl.dismiss();
  }

  //修改购买数量
  modifyNum(flag:boolean):void{
    if(flag){
      this.goodsNum++;
    }else{
      if(this.goodsNum-1 >0){
          this.goodsNum--;
      }
    }
  }

  //计算该商品需要支付多少
  need2Pay():string {
    let tmp = this.goodsNum* this.goods.price;
    return tmp.toFixed(2);
  }

  add2Cart(){
     this.goods.type = this.goodsType;
     let g = new Cart(UUID.UUID(), this.goods, this.goodsNum);
     this.viewCtrl.dismiss(g);
  }

}