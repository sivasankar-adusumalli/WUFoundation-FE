import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { WufoundationService } from '../wufoundation.service';

@Component({
  selector: 'app-wufoundtion',
  templateUrl: './wufoundtion.component.html',
  styleUrls: ['./wufoundtion.component.css']
})
export class WufoundtionComponent implements OnInit {

  user: User = new User();
  message:string;
  objMessage:string;
  userDetails:any;

  constructor(private service:WufoundationService) { }

  ngOnInit(): void {
  }
public displayNow(name:string){
//this.message = this.service.display(name);
}
public displayObject(){
  //this.objMessage = this.service.displayObj(this.user);
this.service.donate(this.user).subscribe((data)=>this.user=data);

 // this.service.donate(this.user).subscribe((data)=>console.log(data));
 
 // let resp = this.service.donate(this.user);
  //resp.subscribe((data)=>this.userDetails=data);
 }
}
