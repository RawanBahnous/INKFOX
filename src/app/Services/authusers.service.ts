import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthusersService {
   users:IUser[] = [
    {username:"rawan_44",email:"rawan@mail.com",password:"Raw@@123", isAdmin: false,islogged:false},
    {username:"amna_44",email:"amna@mail.com",password:"Raw@@123", isAdmin: true,islogged:false},
  ];

  private currentUser: IUser | undefined;

  register(username: string, password: string, email: string, address: string, phone: string) {
    const userExists = this.users.some(user => user.email === email || user.username === username);
    if (!userExists) {
      const newUser: IUser = {
        username: username,
        email: email,
        password: password,
        address: address,
        phone: phone,
        isAdmin: false,
        islogged: true
      };
      newUser.islogged = true;
      this.currentUser = newUser;
      localStorage.setItem('username',JSON.stringify(newUser));
      this.users.push(newUser);
      return true;

    } else {
      console.log("User already exists.");
      return false;

    }
  }
  login(email:string,pass:string){
    const user:IUser | undefined = this.users.find((p)=> p.password === pass && p.email == email);
    if (user) {
      user.islogged = true;
      this.currentUser = user;
      localStorage.setItem('username', JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }

  logout(){
    if (this.currentUser) {
        this.currentUser.islogged = false;
        this.currentUser = undefined;
      // localStorage.setItem('username', JSON.stringify(this.currentUser));
      localStorage.removeItem('username');

    }
  }
  isLoggedIn(){
    return !!this.currentUser;
  }
  getCurrentUser(){
    return this.currentUser;
    // return localStorage.getItem("")
  }
}
