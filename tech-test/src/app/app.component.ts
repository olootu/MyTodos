import { Component } from '@angular/core';
import { AuthService } from './todos/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Playground';
  isSignedIn: boolean = true;

  constructor(
    public authServ: AuthService,
    private router: Router
  ) { }

  logOut() {
    this.authServ.doSignOut();
    this.isSignedIn = !this.isSignedIn;
    this.router.navigate(['sign-in']);
  }
}
