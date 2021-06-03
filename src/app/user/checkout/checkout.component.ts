import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  id:number;
  user1:any;
  address:string;
  total:number=0;
  cartitems:any=[];
  orderitems:any=[];
  constructor(private loginService:LoginService,private userService:UserService,private route:Router) { }

  ngOnInit(): void {
    this.id=this.loginService.getUSer().id;
    this.userService.getUser(this.id).subscribe(
      (data)=>{
        this.user1=data;
      },
      (error)=>{
        console.log('error');
      }
    )
    this.userService.getUserCart(this.id).subscribe(
      (data:any)=>{
        this.cartitems=data;
         console.log(this.cartitems);
         for (var item of this.cartitems) {
           this.total = item.quantity * item.cusine.price;
         }
      },
      (error)=>{
          console.log('error');
      }
    );
  }

  public order(){
       this.userService.orderItems(this.id).subscribe(
         (data:any)=>{
           console.log(data);
           for (const item of data) {
             
           }
         },
         (error)=>{
           console.log(error);
         }
       );
  }

  public goBack(){
      this.route.navigate(['user/cart']);
  }

}
