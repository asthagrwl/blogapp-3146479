import {Component, OnInit} from '@angular/core';
import {WidgetListService} from "./widget-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  login: boolean=false;
  constructor(private request:WidgetListService){}

  ngOnInit(){
  }
  displayLoginPage(login:boolean){
    this.login=login;
  }

}
