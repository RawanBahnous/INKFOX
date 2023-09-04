import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthusersService } from 'src/app/Services/authusers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  constructor(private auth:AuthusersService,private router:Router) {}
  validatereg = new FormGroup({
    Username: new FormControl("",[Validators.required,Validators.maxLength(40)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.maxLength(15)]),
    address: new FormControl(''),
    Phone: new FormControl("",[Validators.required,Validators.maxLength(11)])
  })

  // toggle pass
  showPassword = false;
  showPass(){
    this.showPassword = !this.showPassword;
  }
  newUser:any;
  register(){
    if (this.validatereg.valid) {
    let Username = this.validatereg.get('Username')?.value ;
    let email = this.validatereg.get('email')?.value;
    let password = this.validatereg.get('password')?.value;
    let address = this.validatereg.get('address')?.value;
    let Phone = this.validatereg.get('Phone')?.value;
 this.newUser = {
      Username:Username,
      email: email,
      password:password ,
      address: address,
      Phone:Phone
    }
    if (Username != null && password != null && email != null && address   != null && Phone  != null ) {
      this.auth.register(Username,password,email,address,Phone);
 
      this.router.navigate(['/home']);
    }
    }

  }
}
