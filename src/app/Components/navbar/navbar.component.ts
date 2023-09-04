import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthusersService } from 'src/app/Services/authusers.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit{
  @ViewChild('mangaTypeSelect') mangaTypeSelect!: ElementRef<HTMLSelectElement>;
  navbarShownSm = false;
  constructor(private router: Router,public authServ:AuthusersService) {}

  Username:any = localStorage.getItem('username');

  ngOnInit(): void {
    let usernamejust = JSON.parse(this.Username);
    this.Username = usernamejust.username;
  }

  onMangaTypeChange() {
    const selectedType = this.mangaTypeSelect.nativeElement.value;
    if (selectedType) {
      this.router.navigate(['/typemanga', selectedType]);
    }
  }

  logout(){
    this.authServ.logout();
    this.router.navigate(['/login']);
  }

  opennav(){
    this.navbarShownSm = !this.navbarShownSm;
  }
}
