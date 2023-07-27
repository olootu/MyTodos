import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateTodosGuard } from './can-activate-todos.guard';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TodosResolver } from './todos.resolver';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },

  {
    path: 'sign-in',
    component: SignInComponent
  },

  {
    path: 'todos',
    component: ToDoListComponent,
    canActivate: [
      CanActivateTodosGuard
    ]
  },
  {
    path: '**',
    redirectTo: 'todos',
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TodosResolver, CanActivateTodosGuard]
})
export class TodosRoutingModule { }
