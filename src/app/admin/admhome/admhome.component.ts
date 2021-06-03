import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admhome',
  templateUrl: './admhome.component.html',
  styleUrls: ['./admhome.component.css']
})
export class AdmhomeComponent implements OnInit {

  user:any;
  
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.user=this.loginService.getUSer();
  }
   
  

}
