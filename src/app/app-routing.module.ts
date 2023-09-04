import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MangalistComponent } from './Components/mangalist/mangalist.component';
import { MangadetailsComponent } from './Components/mangadetails/mangadetails.component';
import { CartlistComponent } from './Components/cartlist/cartlist.component';
import { ErrorComponent } from './Components/error/error.component';
import { TypemangaComponent } from './Components/typemanga/typemanga.component';
import { AdminhomeComponent } from './ComponentsDashboard/adminhome/adminhome.component';
import { AdmintypesComponent } from './ComponentsDashboard/admintypes/admintypes.component';
import { AdminmangaComponent } from './ComponentsDashboard/adminmanga/adminmanga.component';
import { AdminvendorsComponent } from './ComponentsDashboard/adminvendors/adminvendors.component';
import { DashboardComponent } from './ComponentsDashboard/dashboard/dashboard.component';
import { authGuard } from './Services/auth.guard';
import { AllmangalistComponent } from './Components/allmangalist/allmangalist.component';
import { AddmangaComponent } from './ComponentsDashboard/addmanga/addmanga.component';
import { AddtypeComponent } from './ComponentsDashboard/addtype/addtype.component';
import { MdetailsComponent } from './ComponentsDashboard/mdetails/mdetails.component';
import { MmdetComponent } from './Components/mmdet/mmdet.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "mangalist", component: MangalistComponent },
  { path: "mangalist/:id", component: MangadetailsComponent },
  { path: "typemanga/:id", component: TypemangaComponent },
  { path: "cartlist", component: CartlistComponent },
  { path: "allmangalist", component: AllmangalistComponent },

  {
    path: "dashboard", canActivate: [authGuard], component: DashboardComponent,
    children: [
      { path: "adminhome", component: AdminhomeComponent },
      { path: 'admintypes', component: AdmintypesComponent },
      { path: "adminmanga", component: AdminmangaComponent },
      { path: "addmanga", component: AddmangaComponent },
      { path: "addtype", component: AddtypeComponent },
      { path: "mdetails/:id", component: MdetailsComponent },
  // { path: "mmdet/:id", component: MmdetComponent },

    ]
  },
  // { path: "**", component: ErrorComponent },
  { path: "", component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
