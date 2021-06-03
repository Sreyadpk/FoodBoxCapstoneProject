import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  public addCusine(cusine:any){
     return this.http.post(`${baseUrl}/admin/add-cusine`,cusine);
  }
 
  public retrieveAllCusines(){
    return this.http.get(`${baseUrl}/admin/getcusines`);
  }

  public getCusineByID(id:number){
    return this.http.get(`${baseUrl}/admin/getcusine/${id}`);
  }

  public updateCusine(cusineid:number,cusine:any){
    return this.http.post(`${baseUrl}/admin/update-cusine/${cusineid}`,cusine);
  }

  public removeCusine(cusineid:number){
     return this.http.delete(`${baseUrl}/admin/remove-cusine/${cusineid}`);
  }

}
 