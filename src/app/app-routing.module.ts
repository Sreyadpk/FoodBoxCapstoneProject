import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { AddcusineComponent } from "./admin/addcusine/addcusine.component";
import { AdmhomeComponent } from "./admin/admhome/admhome.component";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { RemcusineComponent } from "./admin/remcusine/remcusine.component";
import { UpdcusineComponent } from "./admin/updcusine/updcusine.component";
import { ViewcusineComponent } from "./admin/viewcusine/viewcusine.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AdminGuard } from "./services/admin.guard";
import { UserGuard } from "./services/user.guard";
import { SignupComponent } from "./signup/signup.component";
import { AddtocartComponent } from "./user/addtocart/addtocart.component";
import { CheckoutComponent } from "./user/checkout/checkout.component";
import { EditaddrComponent } from "./user/editaddr/editaddr.component";
import { EditpassComponent } from "./user/editpass/editpass.component";
import { OrdersumComponent } from "./user/ordersum/ordersum.component";
import { UserDashboardComponent } from "./user/user-dashboard/user-dashboard.component";
import { UsercartComponent } from "./user/usercart/usercart.component";
import { UserhomeComponent } from "./user/userhome/userhome.component";
import { ViewcusinesComponent } from "./user/viewcusines/viewcusines.component";

export const applicationRoutes : Routes = [
    { path : '', component : HomeComponent, pathMatch:'full'},
    { path : 'signup', component : SignupComponent, pathMatch:'full' },
    { path : 'login', component : LoginComponent, pathMatch:'full' },
    { path : 'admin', component : DashboardComponent, canActivate: [AdminGuard],
      children:[{ path:'',redirectTo:'home',pathMatch:'full'},
                { path : 'home',component : AdmhomeComponent, pathMatch:'full',canActivate:[AdminGuard] },
                { path: 'add-cusine',component : AddcusineComponent, pathMatch:'full',canActivate:[AdminGuard]  },
                { path: 'view-cusines', component : ViewcusineComponent, pathMatch:'full' ,canActivate:[AdminGuard]},
                { path:'update/:cusineId', component : UpdcusineComponent, pathMatch:'full', canActivate : [AdminGuard] },
                { path:'remove/:cusineId', component : RemcusineComponent, pathMatch:'full', canActivate : [AdminGuard] }
                  ]  },
    { path : 'user', component : UserDashboardComponent, canActivate: [UserGuard],
      children:[ { path:'',redirectTo:'home',pathMatch:'full'},
      { path: 'checkout',component : CheckoutComponent,pathMatch : 'full', canActivate : [UserGuard]},
      { path: 'order-summary',component : OrdersumComponent, pathMatch : 'full', canActivate : [UserGuard]},
      { path: 'edit-address',component : EditaddrComponent, pathMatch : 'full', canActivate : [UserGuard]},
      { path: 'edit-password',component : EditpassComponent, pathMatch : 'full', canActivate : [UserGuard]},
      { path : 'home',component : UserhomeComponent, pathMatch:'full',canActivate : [UserGuard]},
      { path : 'view-cuisines',component : ViewcusinesComponent,pathMatch :'full',canActivate:[UserGuard]},
      { path : 'cart',component : UsercartComponent, pathMatch :'full',canActivate:[UserGuard]},
      { path : 'addtocart/:cusineId',component : AddtocartComponent, pathMatch :'full',canActivate:[UserGuard]}
      ]
    }
]