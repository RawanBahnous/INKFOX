import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthusersService } from 'src/app/Services/authusers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  constructor(private authServ:AuthusersService , private router:Router) {}
  valideLogin = new FormGroup({
    email: new FormControl("",[Validators.email,Validators.required]),
    pass: new FormControl("",[Validators.required,Validators.minLength(8)])
})

showpass = false;
showPass(){
  this.showpass = !this.showpass;
}
oldUser:any;
Username:any;
  login() {
    const email = this.valideLogin.get('email')?.value;
    const pass = this.valideLogin.get('pass')?.value;

    if (email && pass) {
      const loggedIn = this.authServ.login(email, pass);
      if (loggedIn) {
        
          if(this.authServ.getCurrentUser()?.isAdmin){
          const currentUser = this.authServ.getCurrentUser();
          this.Username = currentUser?.username;
     
          localStorage.setItem('username admin', this.Username);
          this.router.navigate(['dashboard']);
      
        } else {
          const currentUser = this.authServ.getCurrentUser();
          this.Username = currentUser?.username;
          localStorage.setItem('username user', this.Username);
          this.router.navigate(['/home']);
        }
      } else {
        this.showpopup = false;
      }
    }
  }
  showpopup = true;

  close(){
    this.showpopup = true;
  }


}


