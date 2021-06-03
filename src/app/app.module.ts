import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { applicationRoutes } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { SideBarComponent } from './user/side-bar/side-bar.component';
import { AddcusineComponent } from './admin/addcusine/addcusine.component';
import { AdmhomeComponent } from './admin/admhome/admhome.component';
import { ViewcusineComponent } from './admin/viewcusine/viewcusine.component';
import { UpdcusineComponent } from './admin/updcusine/updcusine.component';
import { RemcusineComponent } from './admin/remcusine/remcusine.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ViewcusinesComponent } from './user/viewcusines/viewcusines.component';
import { UsercartComponent } from './user/usercart/usercart.component';
import { AddtocartComponent } from './user/addtocart/addtocart.component';
import { EditaddrComponent } from './user/editaddr/editaddr.component';
import { EditpassComponent } from './user/editpass/editpass.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { OrdersumComponent } from './user/ordersum/ordersum.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UserDashboardComponent,
    SidebarComponent,
    SideBarComponent,
    AddcusineComponent,
    AdmhomeComponent,
    ViewcusineComponent,
    UpdcusineComponent,
    RemcusineComponent,
    UserhomeComponent,
    ViewcusinesComponent,
    UsercartComponent,
    AddtocartComponent,
    EditaddrComponent,
    EditpassComponent,
    CheckoutComponent,
    OrdersumComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
