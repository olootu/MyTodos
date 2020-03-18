import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TodoService } from './services/todo.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodosearchPipe } from './todosearch.pipe';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { SessionService } from './services/session.service';
import { AuthService } from './services/auth.service';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [ToDoListComponent, AddTodoComponent, TodosearchPipe, TodoItemsComponent, SignInComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService, SessionService, AuthService],
})
export class TodosModule { }
