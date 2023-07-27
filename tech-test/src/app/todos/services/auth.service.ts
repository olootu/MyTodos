import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isSignedIn() {
    return !!localStorage.getItem('todo_User')
  }

  doSignOut() {
    localStorage.removeItem('todo_User');
  }

  getToken() {
    return localStorage.getItem('todo_User');
  }

  setToken(name: string, accessToken: string) {
    localStorage.setItem(name, accessToken)
  }
}
