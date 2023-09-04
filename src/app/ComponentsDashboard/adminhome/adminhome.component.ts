import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthusersService } from 'src/app/Services/authusers.service';
import { DataserviceService } from 'src/app/Services/dataservice.service';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private router: Router,private authServ:AuthusersService,
    private orderServ:OrdersService,
    private dataServ:DataserviceService) { }

    mangaLength:any;
    typeLength:any;
    usersLength:any;
    ordersArr:any;
    speordersArr:any;
  ngOnInit(): void {
    const user = this.authServ.getCurrentUser();
    if (user && user.isAdmin) {
      console.log("aloo admin");
    }

    this.mangaLength = this.dataServ.mangaList.length;
    this.typeLength = this.dataServ.typesList.length;
    this.usersLength = this.authServ.users.length;
    this.ordersArr = this.orderServ.getAllOrders();
    this.speordersArr = this.orderServ.getSpecOrder();
  }
  removeAllSpecial(){
  }
  removeAll(){
  }


  gootype(){
    this.router.navigate(['/dashboard/adminhome']);
  }

}
