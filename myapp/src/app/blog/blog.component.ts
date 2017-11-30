import { Component, OnInit } from '@angular/core';
import { WidgetListService } from "../widget-list.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  login: boolean=false;
  items:Object [];
  widget_id: number;
  link = {
    home : ["/home"],
    about : ["/about"]
  }
  constructor(private request:WidgetListService){}

  ngOnInit(){
    this.request.loadData()
      .subscribe((data) => {
          this.items=data;
        }
      )
  }
  displayLoginPage(login:boolean){
    this.login=login;
  }

  addWidget(title,name,desc){
    if(title!="" && name!="" && desc!="") {
      let widget = {
        title: title,
        name: name,
        desc: desc
      }
      if ((<HTMLInputElement>document.getElementById("edit")).innerHTML == "Update") {
        this.request.updateData(this.widget_id, widget)
          .subscribe(data => {
            this.request.loadData()
              .subscribe((data) => {
                this.items = data;
              });
          });
        (<HTMLInputElement>document.getElementById("edit")).innerHTML = "Add";
        (<HTMLInputElement>document.getElementById("tt")).value = "";
        (<HTMLInputElement>document.getElementById("nm")).value = "";
        (<HTMLInputElement>document.getElementById("desc")).value = "";


      } else if ((<HTMLInputElement>document.getElementById("edit")).innerHTML == "Add") {
        this.request.postData(widget)
          .subscribe(data => {
            this.items.push(data);
          });
      }
    }else{
      alert("Field cannot be empty!");
    }
  }

  deleteWidget(id:number){
    /* alert(id);*/
    /* this.request.deleteData(this.items[id]);*/
    this.request.deleteData(id)
      .subscribe(data => {
        this.items=data;
        this.ngOnInit();
      });
  }

  updateData(event){

    (<HTMLInputElement>document.getElementById("tt")).value=event.title;
    (<HTMLInputElement>document.getElementById("nm")).value=event.name;
    (<HTMLInputElement>document.getElementById("desc")).value=event.desc;
    (<HTMLInputElement>document.getElementById("edit")).innerHTML="Update";
    this.widget_id=event.id;
    console.log(this.widget_id);
  }


  /*updateWidget(item,data){
    this.request.loadData()()
      .subscribe(data =>)
    if(item.id) {
      this.request.updateData(data)
        .subscribe(data => {
          console.log(data);
        });
    }
  }*/
  /*
    checkWidget(item){
      this.request.checkData(item)
        .subscribe(data =>{

        })
    }*/



}
