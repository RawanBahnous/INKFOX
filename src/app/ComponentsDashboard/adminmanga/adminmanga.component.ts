import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthusersService } from 'src/app/Services/authusers.service';
import { DataserviceService } from 'src/app/Services/dataservice.service';
import { OrdersService } from 'src/app/Services/orders.service';
@Component({
  selector: 'app-adminmanga',
  templateUrl: './adminmanga.component.html',
  styleUrls: ['./adminmanga.component.css']
})
export class AdminmangaComponent implements OnInit{
  mangaLst:any;
  typeLength:any;
  usersLength:any;
  ordersArr:any;
  speordersArr:any;
  constructor(private dataServ:DataserviceService,private router : Router,private Usrs:AuthusersService,private orderServ:OrdersService) {}
  ngOnInit(): void {
    this.mangaLst = this.dataServ.getManga();
  }
  Delete(id: number) {
    if (Array.isArray(this.mangaLst)) {
      const index = this.mangaLst.findIndex((m: any) => m.id === id);
      if (index !== -1) {
        this.mangaLst.splice(index, 1);
      }
    }
  }


  search(searching:any){
    if (Array.isArray(this.mangaLst)) {
        this.mangaLst = this.mangaLst.filter((m) =>{
          return m.Title.toLowerCase().includes(searching.toLowerCase());
    });
    };
  }
  sort(){
    if (Array.isArray(this.mangaLst) && this.mangaLst.length > 0) {
        this.mangaLst = this.mangaLst.sort(
          (a:any ,b:any) =>
          {
            let namea = a.Title.toLowerCase();
            const nameB = b.Title.toLowerCase();
              if (namea < nameB) return -1;
              if (namea > nameB) return 1;
              return 0;
          });
    }}

    Go(id:number){
this.router.navigate(['/dashboard/mdetails',id]);

    }
}
