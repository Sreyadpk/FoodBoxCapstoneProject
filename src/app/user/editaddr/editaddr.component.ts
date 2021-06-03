import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editaddr',
  templateUrl: './editaddr.component.html',
  styleUrls: ['./editaddr.component.css']
})
export class EditaddrComponent implements OnInit {

  user1:any;
  id:number;
  updateDetails={
    userId:'',
    address:''
  }
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
   
  public editAddress(){
    this.updateDetails.userId=this.user1.id;
    this.updateDetails.address=this.user1.address;
      this.userService.updateAddress(this.updateDetails).subscribe(
        (data:any)=>{
          console.log('Success');
          Swal.fire('success','address is updated','success');
        },
        (error)=>{
          console.log('Error');
          Swal.fire('error','Server error','error');   
        }
      );
  }
}
