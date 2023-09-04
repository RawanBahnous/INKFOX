import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthusersService } from 'src/app/Services/authusers.service';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styles: [
  ]
})
export class AdminnavComponent implements OnInit{
  username:any;

  constructor(private authServ:AuthusersService,private router:Router){}
  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    let usernamejust = JSON.parse(this.username);
    this.username = usernamejust.username;
  }
  logout(){
    this.authServ.logout();
    this.router.navigate(['/login']);
  }
  mangalist(){
    this.router.navigate(['/adminmanga']);

  }
}
