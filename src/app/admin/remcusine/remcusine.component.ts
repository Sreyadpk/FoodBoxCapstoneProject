import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-remcusine',
  templateUrl: './remcusine.component.html',
  styleUrls: ['./remcusine.component.css']
})
export class RemcusineComponent implements OnInit {

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

  public removeCusine(){
      this.adminService.removeCusine(this.id).subscribe((data:any)=>{
      console.log('success');
      Swal.fire('success',`${this.cusine.cusname} removed from database successfully`,'success');
      this.route.navigate(['admin/view-cusines']);
    },(error)=>{
      console.log("error");
      Swal.fire('Error',"Server Error",'error');
      this.route.navigate(['admin/view-cusines']);
    });

  }

  public goback(){
    this.route.navigate(['admin/view-cusines']);
  }
   
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
