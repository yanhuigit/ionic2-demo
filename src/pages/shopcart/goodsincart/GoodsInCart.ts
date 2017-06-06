import { Component,OnInit,Input } from '@angular/core';
import {Cart} from '../Cart.modal';

@Component({
  selector:'app-goodsincart',
  templateUrl: 'GoodsInCart.html'
})
export class GoodsInCart implements OnInit{

  constructor() {
  }

  @Input() selectGoods:Cart[];
  
  ngOnInit() {
  }

  editOrFinsh:string = "编辑";
  btnEdit:boolean = true;

  //点击编辑时才显示checkbox
  unshow:boolean = true;
  edit(){
    if(this.btnEdit){
      this.unshow = false;
      this.editOrFinsh="完成";
      this.btnEdit = false;
    }else{
      this.unshow = true;
      this.editOrFinsh="编辑";
      this.btnEdit = true;
    }
  }

  delOrder(){
    let editOrder = document.getElementsByName("editOrder");
    console.log(editOrder);
    alert("这个有问题，不知道怎么获取ionic的checkbox");
  }

}
