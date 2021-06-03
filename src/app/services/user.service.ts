import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient)
   { 

   }

   public addUser(user:any){
     return this.http.post(`${baseUrl}/user/`, user);
   }

   public getUser(userid:number){
    return this.http.get(`${baseUrl}/user/${userid}`);
   }

   public getCusines(){
     return this.http.get(`${baseUrl}/user/getcusines`);
   }

   public getCusineByID(id:number){
     return this.http.get(`${baseUrl}/user/getcusine/${id}`);
   }

   public searchByCategory(search:any){
    return this.http.get(`${baseUrl}/user/getcusines/${search}`);
   }


   public addToCart(addToCartJSON:any){
     return this.http.post(`${baseUrl}/user/addtocart`,addToCartJSON);
   }
   
   public updateQuantity(chQuantity:any){
     return this.http.post(`${baseUrl}/user/updateQuantity`,chQuantity);
   }

   public removeItem(itemsId:number){
     return this.http.delete(`${baseUrl}/user/removeItem/${itemsId}`);
   }
   public getUserCart(userid:number){
     return this.http.get(`${baseUrl}/user/getusercart/${userid}`);
   }

   public updateAddress(updateDetails:any){
       return this.http.post(`${baseUrl}/user/updateAddress`,updateDetails);
   }

   public updatePassword(updateDetails:any){
    return this.http.post(`${baseUrl}/user/updatePassword`,updateDetails);
   }

   public orderItems(id:number){
      return this.http.post(`${baseUrl}/user/orderitems/${id}`,null);
   }

}
