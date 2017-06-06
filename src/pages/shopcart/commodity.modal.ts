/**
 * 商品信息
 */
export class Commodity{
    id:string;
    desc:string;
    price:number;
    imgsrc:string;
    type:string=''; //商品型号款式
    constructor(id,desc,price,imgsrc){
        this.id=id;
        this.desc= desc;
        this.price = price;
        this.imgsrc = imgsrc;
    }
}