import { Component } from '@angular/core';
import { AuthusersService } from 'src/app/Services/authusers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

constructor(public authServ:AuthusersService) {}
}
