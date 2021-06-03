import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editpass',
  templateUrl: './editpass.component.html',
  styleUrls: ['./editpass.component.css']
})
export class EditpassComponent implements OnInit {
  
  user:any;
  updateDetails={
    userId:'',
    password:''
  }

  constructor(private loginService:LoginService,private snack:MatSnackBar,private userService:UserService) { 
 

  }

  ngOnInit(): void {
    this.user=this.loginService.getUSer();
  }

  public editPassword(f:NgForm){
     if(f.value.password != f.value.cpassword){
      this.snack.open("password does not match",'',
      {duration:3000,verticalPosition:'top',horizontalPosition:'end'});
      return;
     }else{
      this.updateDetails.userId=this.user.id;
      this.updateDetails.password=f.value.password;
       this.userService.updatePassword(this.updateDetails).subscribe(
        (data:any)=>{
          console.log('Success');
          Swal.fire('success','password is updated..Please re-login to purchase','success');
        },
        (error)=>{
          console.log('Error');
          Swal.fire('error','Server error','error');   
        }
       );
     }
  }
}
