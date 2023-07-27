import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { Todo } from '../todo.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  toDoList: Todo[] = [];
  tdModel: Todo = new Todo();
  completedItems = [];

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTodos();
  }


  getTodos() {
    this.todoService.getTodos()
      .subscribe((data: Todo[]) => {
        this.toDoList = data;
        this.completedItems = data.filter(c => c.done === true);
      })
  }

  addTodo(todo) {
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

  isChecked(todo) {
    todo.done = !todo.done;
    if (todo.done) {
      this.completedItems.push(todo.done);
    } else {
      this.completedItems.pop();
    }
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id)
      .subscribe(a => {
        this.getTodos();
      });
  }
}
