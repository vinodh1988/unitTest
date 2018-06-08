import { Component, OnInit,Input,Output } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import  {Messages} from "structure-share/Messages";
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
msg:Messages[]=[];
user:string;
@Input('data') data:string='default';

  constructor(auth:AuthServiceService) {
    console.log("Object created");
      this.user=auth.user;
   }

  ngOnInit() {
    console.log("Component initiated");
   
  }

  changeData(){
    this.data="XP";
  }
}
