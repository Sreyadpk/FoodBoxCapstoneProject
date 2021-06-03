import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    address:''
  }
  constructor(private userService:UserService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this.snack.open("Username is required",'',
      {duration:3000,verticalPosition:'top',horizontalPosition:'end'});
      return;
    }
    if(this.user.password == '' || this.user.password == null){
      this.snack.open("password is required",'',
      {duration:3000,verticalPosition:'top',horizontalPosition:'end'});
      return;
    }
    if(this.user.firstName == '' || this.user.firstName == null){
      this.snack.open("First Name is required",'',
      {duration:3000,verticalPosition:'top',horizontalPosition:'end'});
      return;
    }

    if(this.user.email == '' || this.user.email == null){
      this.snack.open("Email is required",'',
      {duration:3000,verticalPosition:'top',horizontalPosition:'end'});
      return;
    }

    if(this.user.phone == '' || this.user.phone == null){
      this.snack.open("phone is required",'',
      {duration:3000,verticalPosition:'top',horizontalPosition:'end'});
      return;
    }


    //addding user -- addUSer() -> UserService
    this.userService.addUser(this.user).subscribe(
      //on sucess
       (data)=>{
        console.log(data);
        Swal.fire('Success',`${this.user.username} is registered,Please login to continue`,'success');
       },
       //on error
       (error)=>{
           console.log(error);
           alert('Something went wrong');
       }
    );

  }

}
