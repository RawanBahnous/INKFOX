import { Component, OnInit } from '@angular/core';
import { AuthusersService } from './Services/authusers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'INKFOX';

  constructor(public auth:AuthusersService){}

    isLoading = true;

    ngOnInit(): void {
      setTimeout(() => {
        this.isLoading = false;
      }, 1900);
    }

}
