import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {
  
  chQuantity={
    itemsId:'',
    quantity:''
  }
  id:number;
  cartitems:any=[];
  constructor(private loginService:LoginService,private userService:UserService,private route:Router) { }

  ngOnInit(): void {
    this.id=this.loginService.getUSer().id;
    this.userService.getUserCart(this.id).subscribe(
      (data:any)=>{
        this.cartitems=data;
         console.log(this.cartitems);
         
      },
      (error)=>{
          console.log('error');
      }
    );
  }

  public changeQuantity(f:NgForm){
    this.chQuantity.itemsId=f.value.itemid;
    this.chQuantity.quantity=f.value.quantity;
    this.userService.updateQuantity(this.chQuantity).subscribe(
      (data)=>{
         Swal.fire('success','quantity updated','success');
      },
      (error)=>{
          Swal.fire('error','server error','error');
      }
    );
   }
    
   public removeItem(f:NgForm){
     
     this.userService.removeItem(f.value.itemid).subscribe(
      (data)=>{
        Swal.fire('success','item removed','success');
        this.route.navigate(['/user/cart']);
     },
     (error)=>{
         Swal.fire('error','server error','error');
     }
     );
     
   }
   
}
