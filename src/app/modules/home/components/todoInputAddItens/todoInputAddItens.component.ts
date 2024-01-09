import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todoInputAddItens',
  templateUrl: './todoInputAddItens.component.html',
  styleUrls: ['./todoInputAddItens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {
  @Output() public emmitItemTaskList = new EventEmitter();
  public addItemTaskList: string = "";
  constructor() { }

  ngOnInit() {
  }

  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim();
    if(this.addItemTaskList){
      this.emmitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }
}
