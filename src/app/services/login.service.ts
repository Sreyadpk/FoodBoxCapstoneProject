import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject=new Subject<boolean>();

  constructor(private http:HttpClient) { }

  //generate token
  public generateToken(loginData :any){
     return this.http.post(`${baseUrl}/generate-token`,loginData);
  }
  
  //Get current user: which is logged in
  public getCurrentUser(){
      return this.http.get(`${baseUrl}/current-user`);
  }

  //Login user:Set token in local storage
  public loginUser(token:any){
    localStorage.setItem("token",token);
    return true;
  }

  //isLogin : user is logged in or not
  public isLoggedIn(){
    let tokenStr = localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr== '' || tokenStr ==null){
      return false;
    }else{
      return true;
    }
  }

  //Log out : remove token from local storage
  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  // get token
  public getToken(){
    return localStorage.getItem("token");
  }

  //Set UserDetail

  public setUser(user){
    localStorage.setItem("user",JSON.stringify(user));
   }

  //get UserDetails

  public getUSer(){
    let userStr=localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  //get User Role
  public getUserRole()
  {
    let user=this.getUSer();
    return user.authorities[0].authority;
  }

}
