import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  @Input() widgets
  @Output() deleteOnClick : EventEmitter<number> = new EventEmitter<number>();
  @Output() editOnClick : EventEmitter<Object> = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }
  OnClick(id){
    this.deleteOnClick.emit(id);
  }
  edit(id){
    this.editOnClick.emit(id);

  }

}
