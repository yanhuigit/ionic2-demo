import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Commodity} from './commodity.modal';
import {Cart} from './Cart.modal';

@Component({
  templateUrl: 'shopcart.html'
})
export class ShopcartPage implements OnInit{

  selectGoods:Cart[] = [];
  allGoods:Commodity[]=[];

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    this.getAllGoods();
  }

  getAllGoods(){
    let good1= new Commodity(1001,"小米（MI）智能手环1代【光感心率版】小米手...",198.8,'assets/img/1001.jpg');
    let good2= new Commodity(1002,"金士顿（Kingston）16GB 80MB/s (Micro SD)...",99.20,'assets/img/1002.jpg');
    let good3= new Commodity(1003,"360无线wifi3 300M 无线网卡 迷你路由器 黑色",24.80,'assets/img/1003.jpg');
    this.allGoods.push(
      good1,good2, good3
    );
  }

  newInCart(cart:Cart){
    if(!cart){
      return;
    }
    //如果有重复的
    for(let e of this.selectGoods){
      if(e.getGoods().id === cart.getGoods().id
        && e.getGoods().type === cart.getGoods().type
       ){
          e.setBuyNum(e.getBuyNumer()+cart.getBuyNumer());
          return;
      }
    }
    console.log("new add to ShopCart:");
    console.log(cart);
    this.selectGoods.push(cart);
  }

  calcTotalPay(){
    let money = 0;
    for(let e of this.selectGoods){
      money += Number(e.getAllPrice());
    }
    return money.toFixed(2);
  }

  checkout(){
    console.log("结算中..");
  }

}
