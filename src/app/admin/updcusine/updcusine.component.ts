import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updcusine',
  templateUrl: './updcusine.component.html',
  styleUrls: ['./updcusine.component.css']
})
export class UpdcusineComponent implements OnInit {
   
  cusine={
    cusid:'',
    cusname:'',
    price:'',
    description:'',
    enabled:true,
    category:'',
    quantity:''
  };

  id:number;
  sub:any;

  constructor(private _Activatedroute:ActivatedRoute,private route:Router,private adminService:AdminService) { }

  ngOnInit(): void {
    this.sub=this._Activatedroute.params.subscribe(params => { 
      this.id = params['cusineId']; 
      this.adminService.getCusineByID(this.id).subscribe(
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
  
   public updCusine(){
      this.adminService.updateCusine(this.id,this.cusine).subscribe(
        (data:any)=>{
          console.log('Success');
          Swal.fire('success',`${this.cusine.cusname} updated successfully`,'success');
          this.route.navigate(['admin/view-cusines']);
        },
        (error)=>{
          console.log('error');
          Swal.fire('Error',"Server Error",'error');
          this.route.navigate(['admin/view-cusines']);
        }
      );
   }


  }
