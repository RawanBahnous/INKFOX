import { Injectable } from '@angular/core';
import { IOrder } from 'src/models/iorder';
import { ISpeOrdr } from 'src/models/ispe-ordr';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orderArr:any[] =[];
  specialOrders:any[]=[];
  constructor() { }

  addOrder(order:IOrder){
    this.orderArr.push(order);
  }
  addSpecOrder(order:ISpeOrdr){
    this.specialOrders.push(order);
  }
  getSpecOrder(){
    return this.specialOrders;
  }
  getAllOrders(){
    return this.orderArr;
  }
  getOrderByID(orderId:number){
    let result = this.orderArr.find((o)=> o.id === orderId);
    return result;
  }
}
