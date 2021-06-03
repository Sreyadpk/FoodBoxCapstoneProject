import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewcusines',
  templateUrl: './viewcusines.component.html',
  styleUrls: ['./viewcusines.component.css']
})
export class ViewcusinesComponent implements OnInit {
  
  quantity:number;
  cusines =[{
    cusid:'',
    cusname:'',
    price:'',
    description:'',
    enabled:true,
    category:'' ,
    quantity:''
  }];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getCusines().subscribe(
       (data:any)=>{
        this.cusines=data;
        console.log(this.cusines);
        
       },
       (error)=>{
        console.log("error");
       }
       
    );
  }
   public search(f:NgForm){
     this.userService.searchByCategory(f.value.category).subscribe(
       (data:any)=>{
        this.cusines=data;
       },(error)=>{
        console.log("error");
       }
     );
   }
}
