import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  
  cusine={
    cusid:'',
    cusname:'',
    price:'',
    description:'',
    enabled:true,
    category:'',
    quantity:''
  };
  
  addToCartJSON={
    userId:'',
    cusId:'',
    quantity:''
  }

  id:number;
  sub:any;
  
  constructor(private _Activatedroute:ActivatedRoute,private userService:UserService,private loginService:LoginService) { }

  ngOnInit(): void {
    this.sub=this._Activatedroute.params.subscribe(params => { 
      this.id = params['cusineId']; 
      this.userService.getCusineByID(this.id).subscribe(
        (data:any)=>{
          this.cusine=data;
          console.log(this.cusine);
        },
        (error)=>{
          console.log("error");
        }
      );  
    });
  }
  
  addToCart(f:NgForm){
     this.addToCartJSON.quantity=f.value.quantity;
     this.addToCartJSON.cusId=this.id.toString();
     this.addToCartJSON.userId=this.loginService.getUSer().id;
     
     this.userService.addToCart(this.addToCartJSON).subscribe(
       (data:any)=>{
         console.log('Success');
         Swal.fire('success','cuisine is added to database successfully','success');
       },
       (error)=>{
         console.log('Error');
         Swal.fire('error','Server error','error');   
       }
     );
  }
}
