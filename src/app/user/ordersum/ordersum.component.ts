import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ordersum',
  templateUrl: './ordersum.component.html',
  styleUrls: ['./ordersum.component.css']
})
export class OrdersumComponent implements OnInit {

  id:number;
  total:number=0;
  orderitems:any=[];
  constructor(private loginService:LoginService,private userService:UserService) { }

  ngOnInit(): void {
    this.id=this.loginService.getUSer().id;
    this.userService.orderItems(this.id).subscribe(
      (data:any)=>{
        this.orderitems=data;
        console.log(this.orderitems);
        for (var item of this.orderitems) {
          this.total = item.quantity * item.price;
        }
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
