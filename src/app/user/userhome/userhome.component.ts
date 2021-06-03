import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
 
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  
  user1:any;
  id:number;
  constructor(private loginService:LoginService,private userService:UserService) { }

  ngOnInit(): void {
    this.id=this.loginService.getUSer().id;
    this.userService.getUser(this.id).subscribe(
      (data)=>{
        this.user1=data;
        console.log(this.user1);
        
      },
      (error)=>{
        console.log('error');
      }
    )
  }
  
}
