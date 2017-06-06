import { NgModule } from '@angular/core';
import { IonicPageModule,Config } from 'ionic-angular';

import { ShopcartPage } from './shopcart';
import { MakesurePage } from './makesure/makesure.c'
import {ModalContentPage} from './makesure/ModalContentPage';
import { GoodsInCart} from './goodsincart/GoodsInCart';

@NgModule({
  declarations: [
    ShopcartPage,
    MakesurePage,
    ModalContentPage,
    GoodsInCart
  ],
  imports: [
    IonicPageModule.forChild(ShopcartPage)
  ],
  exports: [
    ShopcartPage,
    MakesurePage,
  ],
  entryComponents: [
    ModalContentPage
  ]
})
export class ShopcartModule {
    constructor(public config: Config) {
      // config.set("tabsHideOnSubPages",true);
    }
}
