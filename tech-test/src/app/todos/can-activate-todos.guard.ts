import { AuthService } from './services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CanActivateTodosGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.auth.isSignedIn()) {
      this.router.navigate(['/sign-in']);
      return false;
    }
    return true;
  }

}