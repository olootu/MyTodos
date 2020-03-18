import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { v4 as uuidv4 } from 'uuid';

import { environment } from '../../../environments/environment';

import {Todo, Signin} from '../todo.model';
import {SessionService} from './session.service'

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

// Fake Server
const fakeBaseUrl = environment.fakeBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(private http: HttpClient, private session: SessionService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  signIn(username: string, password: string){
    return this.http
      .post(fakeBaseUrl + '/sign-in', {
        username,
        password
      })
      .pipe(
        catchError(this.handleError)
      )
  }

  // GET all Todos
  getTodos(): Observable<Todo[]> {
    const options = this.getRequestOptions();
    return this.http.get<Todo[]>(fakeBaseUrl + '/tasks/', {headers: options})
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Cfreate a new Todo
  createTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = uuidv4();
    }
    const options = this.getRequestOptions();
    return this.http
    .post(fakeBaseUrl + '/tasks/', todo, {headers: options})
    .pipe(
      map(response => {
        return new Todo(response);
      }),
      catchError(this.handleError)
    )
  }

  updateTodo(todo: Todo): Observable<Todo> {
    const options = this.getRequestOptions();
    return this.http
      .put(fakeBaseUrl + '/tasks/' + todo.id, todo, {headers: options})
      .pipe(
        map(response => {
          return new Todo(response);
        }),
        catchError(this.handleError)
      )
  }

  deleteTodoById(todoId: number): Observable<null> {
    const options = this.getRequestOptions();
    return this.http
    .delete(fakeBaseUrl + '/tasks/' + todoId, {headers: options})
    .pipe(
      map(response => null),
      catchError(this.handleError)
    )
  }

   // Error handling
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

 private getRequestOptions() {
  // const headers = new Headers({
  //   'Authorization': 'Bearer ' + this.session.accessToken
  // });
  return new HttpHeaders().set('Authorization', `Bearer ${this.session.accessToken}`);
}
}
