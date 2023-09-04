import { Component, ViewChild } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders.service';
import { IOrder } from 'src/models/iorder';
import { ISpeOrdr } from 'src/models/ispe-ordr';

@Component({
  selector: 'app-spectial-order',
  templateUrl: './spectial-order.component.html',
  styles: [
  ]
})
export class SpectialOrderComponent {

  @ViewChild('name') nameInput: any;
  @ViewChild('mail') mailInput: any;
  @ViewChild('specorder') specorderInput: any;


  showPopup:boolean = false;
  showError:boolean = false;
  constructor(private orderServ:OrdersService){}
  specialOrder(name:string,mail:string,specorder:string) {
    if (name && mail && specorder) {
      const order: ISpeOrdr = {
        username: name,
        email: mail,
        specialOrder: specorder
      };
      this.orderServ.addSpecOrder(order);
      this.showPopup = true;
      this.nameInput.nativeElement.value = '';
      this.mailInput.nativeElement.value = '';
      this.specorderInput.nativeElement.value = '';

    } else if (name || mail ||specorder) {
      this.showError = true;
    }
  }

  cancel(){
    this.showPopup = false;
  }
  cancelerror(){
    this.showError = false;

  }
}
