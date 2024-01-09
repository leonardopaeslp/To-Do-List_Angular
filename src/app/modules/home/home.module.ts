import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoButtonDeleteAllComponent } from './components/todoButtonDeleteAll/todoButtonDeleteAll.component';
import { TodoInputAddItensComponent } from './components/todoInputAddItens/todoInputAddItens.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TodoButtonDeleteAllComponent, TodoInputAddItensComponent, HomeComponent, HeaderComponent, TodoListComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
