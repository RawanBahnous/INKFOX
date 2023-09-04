import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthusersService } from 'src/app/Services/authusers.service';
import { CartService } from 'src/app/Services/cart.service';
import { OrdersService } from 'src/app/Services/orders.service';
import { IOrder } from 'src/models/iorder';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styles: [
  ]
})
export class CartlistComponent implements OnInit{
  quantity:number = 1;
  totalPrice:number = 0;
  cartArr:any;
  emptyCart:boolean = true;
  constructor(private cartServ:CartService, private orderServ:OrdersService,public auth:AuthusersService ,private router:Router) {}
  ngOnInit(): void {
    this.cartArr = this.cartServ.getCartItems();

    this.calctotalPrice();
    this.checkEmptyCart();
  }
  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.quantity = item.quantity;
      this.calctotalPrice();
    }
  }

  increaseQuantity(item: any) {

    if (!isNaN(item.Price) && !isNaN(item.quantity)) {
      if (item.quantity === undefined) {
        item.quantity = 1;
      }
      item.quantity++;
      this.calctotalPrice();

    }
  }


  delFromCart(index:number){
    if (Array.isArray(this.cartArr)) {
      let itemByid = this.cartArr.findIndex((m)=> m.id === index);

      if (itemByid !== -1) {
        this.cartArr.splice(itemByid,1);
      }
    }
    this.calctotalPrice();

  }
  clearCart(){
    this.cartArr = [];
    this.calctotalPrice();

  }
  calctotalPrice(){
    this.totalPrice = 0;
    this.cartArr.forEach((item:any) => {
      this.totalPrice += item.Price * item.quantity;
    });
  }

  selectedPaymentMethod: string | null = '';

  setPaymentMethod(method: string | null) {
    this.selectedPaymentMethod = method;
  }


  finishOrder(address: string) {
     const order: IOrder = {
      orderItems: this.cartArr,
      payment:this.selectedPaymentMethod,
      Address: address,
    };
    this.orderServ.addOrder(order);

    this.showpopup = true;

  }
  showpopup = false;
  cancel(){
    this.showpopup = false;
  }
  showConfirmation = false;
  confirm() {
    this.showConfirmation = true;
    this.showpopup = false;
    setTimeout(() => {
      this.showConfirmation = false;
      this.router.navigate(['home']);
    }, 2000);
  }
  checkEmptyCart() {
    this.emptyCart = this.cartArr.length === 0;
  }
  close(){
    this.showpopup = false;
  }
}
