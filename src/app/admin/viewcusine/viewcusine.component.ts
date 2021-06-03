import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-viewcusine',
  templateUrl: './viewcusine.component.html',
  styleUrls: ['./viewcusine.component.css']
})
export class ViewcusineComponent implements OnInit {

  cusines =[{
    cusid:'',
    cusname:'',
    price:'',
    description:'',
    enabled:true,
    category:'' ,
    quantity:''
  }];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.retrieveAllCusines().subscribe(
      (data:any)=>{ 
        this.cusines=data;
        console.log(this.cusines);
      },
      (error)=>{
        console.log("error");
      }

    );
  }

}
