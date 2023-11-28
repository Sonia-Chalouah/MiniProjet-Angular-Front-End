import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiurl=' http://localhost:3000/user';

  Getall(){
    return this.http.get(this.apiurl);
  }

  Getbycode(code: any){
    return this.http.get(this.apiurl + '/' + code)
  }

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }

}
