import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent {
  @Input() todoList: Todo[] = [];
  @Output() check = new EventEmitter();
  @Input() completedItems = []
  @Output() removeItems = new EventEmitter();
  @Output() updateTodo = new EventEmitter();

  constructor() { }

  removeTodo(todo) {
    this.removeItems.emit(todo);
  }

  upDateTodo(todo) {
    this.updateTodo.emit(todo);
  }
  isChecked(todo) {
    this.check.emit(todo);
  }

}
