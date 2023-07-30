import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  @Input() tdModel: Todo;

  @Output() addTodos = new EventEmitter()

  formError: boolean = false;

  catOptions = [
    'Office', 'Household', 'General', 'Sport'
  ]

  addTodo(form, model) {
    if (form.invalid) {
      this.formError = true;
      return
    }
    this.addTodos.emit(model);
    this.formError = false;
  }

}
