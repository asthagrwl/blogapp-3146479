import { Injectable } from '@angular/core';
import  { Http,Headers } from '@angular/http';
import "rxjs/add/operator/map"

const BASE_URL_items="http://localhost:3000/items/";
const BASE_URL_users="http://localhost:3000/users/";
const header = {headers: new Headers({'Content-Type': 'application/json'})}

@Injectable()
export class WidgetListService {

  constructor(private http : Http) { }
    loadData(){
    return this.http.get(BASE_URL_items)
      .map(res => res.json());
}
  getUsers(){
      return this.http.get(BASE_URL_users)
        .map(res => res.json());
  }
  postUsers(data){
    console.log(data);
    return this.http.post(BASE_URL_users,data,header)
      .map(res => res.json());

  }

    postData(data){
      console.log(data);
      return this.http.post(BASE_URL_items,data,header)
        .map(res => res.json());

}

  updateData(id,data){
      return this.http.patch(BASE_URL_items+id,data,header)
        .map(res => res.json())
  }
  deleteData(id){
    return this.http.delete(BASE_URL_items+id,header)
      .map(res => res.json())
  }
  getData(id){
    return this.http.get(BASE_URL_items+id)
      .map(res => res.json());
  }
  /*checkdata(data){
    return data.id?this.updateData(): this.postData(data)
      .map(res => res.json())
  }*/

}
