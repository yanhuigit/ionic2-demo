import {Commodity} from './commodity.modal';

export class Cart {
    private orderId:string; //订单号
    private goods: Commodity;
    private buyNum:number;

    constructor(orderid:string,goods:Commodity, buyNum:number){
        this.orderId =orderid;
        this.goods = goods;
        this.buyNum = buyNum;
    }
    public getOrderId(){
        return this.orderId;
    }

    public getGoods(){
        return this.goods;
    }
    public getBuyNumer(){
        return this.buyNum;
    }
    public getAllPrice(){
        return (this.goods.price* this.buyNum).toFixed(2);
    }

    public setBuyNum(buyNum:number){
        this.buyNum= buyNum;
    }
}