import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcusine',
  templateUrl: './addcusine.component.html',
  styleUrls: ['./addcusine.component.css']
})
export class AddcusineComponent implements OnInit {

  cusine={
    cusname:'',
    price:'',
    description:'',
    enabled:true,
    category:'',
    quantity:''
  };
  constructor(private adminService:AdminService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
   
  addCusine(){
    console.log(this.cusine);
    if(this.cusine.cusname == '' || this.cusine.cusname == null){
      this.snack.open("Cusine name is required",'',
      {duration:3000,verticalPosition:'top',horizontalPosition:'end'});
      return;
    }
     
    //ADD CUSINE addCusine() -> admin.service
    this.adminService.addCusine(this.cusine).subscribe(
      //on sucesss
      (data:any)=>{
        console.log(data);
        Swal.fire("success",`${this.cusine.cusname} is added to database`,'success');
      },
      //on error
      (error:any)=>{
        console.log(error);
        alert("Cusine already exists in database");
      }
    );

  }
}
