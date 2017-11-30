import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WidgetListService} from "./widget-list.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { ChildbarComponent } from './childbar/childbar.component';
import {RouterModule} from "@angular/router";
import { ListDetailComponent } from './list-detail/list-detail.component';
import { LoggingComponent } from './logging/logging.component';
import { BlogComponent } from './blog/blog.component';

const approutes =[
  {path: "", redirectTo: '/home',pathMatch:'full'},
  {path: "home", component: ChildbarComponent},
  {path: "about", component: ListDetailComponent},
  {path: "**",component: ChildbarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ChildbarComponent,
    ListDetailComponent,
    LoggingComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,RouterModule.forRoot(approutes)
  ],
  providers: [WidgetListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
