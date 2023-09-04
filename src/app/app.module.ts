import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';
import { TopmangaComponent } from './Components/topmanga/topmanga.component';
import { SearchnavComponent } from './Components/searchnav/searchnav.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MangalistComponent } from './Components/mangalist/mangalist.component';
import { MangadetailsComponent } from './Components/mangadetails/mangadetails.component';
import { CartlistComponent } from './Components/cartlist/cartlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpectialOrderComponent } from './Components/spectial-order/spectial-order.component';
import { SlidermangaComponent } from './Components/slidermanga/slidermanga.component';
import { RouterModule } from '@angular/router';
import { TypemangaComponent } from './Components/typemanga/typemanga.component';

import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './Components/error/error.component';
import { TypeslistComponent } from './Components/typeslist/typeslist.component';
import { AdminhomeComponent } from './ComponentsDashboard/adminhome/adminhome.component';
import { AdminnavComponent } from './ComponentsDashboard/adminnav/adminnav.component';
import { AdminfooterComponent } from './ComponentsDashboard/adminfooter/adminfooter.component';
import { AdmintypesComponent } from './ComponentsDashboard/admintypes/admintypes.component';
import { AdminmangaComponent } from './ComponentsDashboard/adminmanga/adminmanga.component';
import { AdminvendorsComponent } from './ComponentsDashboard/adminvendors/adminvendors.component';
import { DashboardComponent } from './ComponentsDashboard/dashboard/dashboard.component';
import { AllmangalistComponent } from './Components/allmangalist/allmangalist.component';
import { AddmangaComponent } from './ComponentsDashboard/addmanga/addmanga.component';
import { AddtypeComponent } from './ComponentsDashboard/addtype/addtype.component';
import { MdetailsComponent } from './ComponentsDashboard/mdetails/mdetails.component';
import { MmdetComponent } from './Components/mmdet/mmdet.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    TopmangaComponent,
    SearchnavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MangalistComponent,
    MangadetailsComponent,
    CartlistComponent,
    SpectialOrderComponent,
    SlidermangaComponent,
    TypemangaComponent,
    ErrorComponent,
    TypeslistComponent,
    AdminhomeComponent,
    AdminnavComponent,
    AdminfooterComponent,
    AdmintypesComponent,
    AdminmangaComponent,
    AdminvendorsComponent,
    DashboardComponent,
    AllmangalistComponent,
    AddmangaComponent,
    AddtypeComponent,
    MdetailsComponent,
    MmdetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
