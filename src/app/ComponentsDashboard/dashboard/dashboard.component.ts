import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthusersService } from 'src/app/Services/authusers.service';
import { DataserviceService } from 'src/app/Services/dataservice.service';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  mangaLength:any;
  typeLength:any;
  usersLength:any;
  ordersArr:any;
  speordersArr:any;
  constructor(private dataServ:DataserviceService,private router:Router,private Usrs:AuthusersService,private orderServ:OrdersService) {}
  ngOnInit(): void {
      const user = this.Usrs.getCurrentUser();
      if (user && user.isAdmin) {
        this.router.navigate(['/dashboard/adminhome']);
      }

    this.mangaLength = this.dataServ.mangaList.length;

    this.typeLength = this.dataServ.typesList.length;
 
    this.usersLength = this.Usrs.users.length;
   
    this.ordersArr = this.orderServ.getAllOrders();

    this.speordersArr = this.orderServ.getSpecOrder();

  }



  removeAllSpecial(){

  }
  removeAll(){
  }





}
