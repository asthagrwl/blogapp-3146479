import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {WidgetListService} from ".././widget-list.service";

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  login:boolean = false;
  users:Object [];
  @Output() validate : EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private request:WidgetListService) { }

  ngOnInit() {
    this.request.getUsers()
      .subscribe((data) => {
          this.users=data;
        }
      )
  }
  loginValidation(name,pass){
    let logg=false;
    this.users.forEach(function(item){
      let data=item;
      if(name==data["name"] && pass==data["password"]){
        logg=true;
      }else{
        console.log("user does not exist..!");
      }
    });
    this.login=logg;
    this.validate.emit(this.login);
  }
  signup(name,pass,cnfm_pass){

    if(pass==cnfm_pass){
      let user={
        name:name,
        password:pass
      }
      let flag=0;
      this.users.forEach(function(item){
        let data=item;
        if(user.name==data["name"] && user.password==data["password"]){
          flag=1;
        }else{
          flag=0;
        }
      });
      if(flag==0){
        this.request.postUsers(user)
          .subscribe(data => {
            this.users.push(data);
          });
        console.log("New User Added..!");
      }else{
        console.log("User Already Exists..!");
      }
    }else{
      alert("password and confirm password did not match..!");
    }


  }

}
