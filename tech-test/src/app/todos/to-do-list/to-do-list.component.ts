import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import {Todo} from '../todo.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  toDoList:Todo[] = [];
  tdModel: Todo = new Todo();

  constructor(
     private todoService : TodoService,
     private route: ActivatedRoute,
     private auth: AuthService,
     private router: Router
     ) { }

  ngOnInit() {
   this.getTodos();
  }


  getTodos() {
    this.route.data
    .subscribe((data: Todo[]) => {
      this.toDoList = data['todos'];
    })
  }

  addTodo(todo){
    this.todoService.createTodo(todo)
    .subscribe(res => {
      this.getTodos();
      this.tdModel = new Todo();
    })
  }

  upDateTodo(todo) {
    this.todoService.updateTodo(todo)
    .subscribe(res => {
      this.getTodos();
    })
  }

  isChecked(todo){
    return todo.done = !todo.done;
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id)
    .subscribe(a => {
      this.getTodos();
    });
  }
}
