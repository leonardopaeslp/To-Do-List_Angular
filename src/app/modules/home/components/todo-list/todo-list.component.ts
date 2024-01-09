import { Component, DoCheck, OnInit } from '@angular/core';
import { taskList} from '../../model/task-list'
import { last } from 'rxjs';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<taskList> = JSON.parse(localStorage.getItem("list") ||  '[]');
  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorage();
  }


  public deleteItemTaskList(index: number){
    this.taskList.splice(index, 1);
  }

  public deleteAllItens(){
    const confr = window.confirm("Você deseja realmente deletar tudo?");
    if(confr){
      this.taskList = [];
    } 
  }

  public emmitItemTaskList(event: any){
    const item: taskList = {
      task: event,
      checked: false
    }
    this.taskList.push(item);
  }

  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("A Task está vazia, deseja Deletar?")
      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

}
