import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:''
  }

  constructor(private snack:MatSnackBar,private loginService:LoginService,private route:Router) { }

  ngOnInit(): void {
  }

  formLogin(){
    console.log("login form submitted");
    if(this.loginData.username.trim() == '' || this.loginData.username == null){
      this.snack.open("Username is required",'',
      {duration:3000});
      return; 
    }
    if(this.loginData.password.trim() == '' || this.loginData.password == null){
      this.snack.open("Password is required",'',
      {duration:3000});
      return; 
    }
    //request to server to generate token
    this.loginService.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log('Success');
        console.log(data);

        //login..
        this.loginService.loginUser(data.token);
        
        this.loginService.getCurrentUser().subscribe(
          (user:any)=>{this.loginService.setUser(user);
          console.log(user);
          
          //redirect...   ADMIN => admin dashboard ,USER => user dashboard
            if(this.loginService.getUserRole() == 'ADMIN'){
              //admin dashboard
              this.route.navigate(['admin']);
              this.loginService.loginStatusSubject.next(true);
            }else if(this.loginService.getUserRole()=='USER'){
               //user dashboard
               this.route.navigate(['user']);
               this.loginService.loginStatusSubject.next(true);
            }else{
              this.loginService.logout();
            }
          });
      },
      (error)=>{
        console.log('Error');
        console.log(error);
        this.snack.open("Invalid credentials...Please try again",'',
        {duration:3000});
      
      });
      

  }

}
