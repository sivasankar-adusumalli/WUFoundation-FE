import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WufoundationService {

  name : string;
  constructor(private http:HttpClient) { }
  
  public donate(user):Observable<any>{

  return this.http.post("http://localhost:8080/donate",user);

  }
  public displayObj(user){
    console.log("name from object"+user.first);
    console.log("name from object"+user.last);
    console.log("name from object"+user.address);
    console.log("name from object"+user.city);
    console.log("name from object"+user.country);
    console.log("name from object"+user.state);
    console.log("name from object"+user.amount);


    return "Your Name from Obj: "+user.name;
  }
}
