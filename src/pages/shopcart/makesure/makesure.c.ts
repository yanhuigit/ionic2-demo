import { Component,Input,Output,EventEmitter} from '@angular/core';

import { ModalController} from 'ionic-angular';
import {ModalContentPage} from './ModalContentPage'
import { Commodity } from '../commodity.modal'
import {Cart} from '../Cart.modal';

/**
 * 加入购物车时弹出的对话确认框
 */
@Component({
  selector: 'app-makesure',
  templateUrl: 'makesure.c.html'
})
export class MakesurePage {

  constructor(public modalCtrl: ModalController) { }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

  @Input() goods:Commodity;
  @Output() newInCart = new EventEmitter<Cart>();

  openMenu(){
    let copy = new Commodity(
      this.goods.id,this.goods.desc, this.goods.price, this.goods.imgsrc
    );
    let modal = this.modalCtrl.create(ModalContentPage, {param: copy });
    modal.onDidDismiss(data => {
      if(data){
        this.newInCart.emit(data);
      }
    });
    modal.present();
  }

}


