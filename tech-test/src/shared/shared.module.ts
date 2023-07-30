import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot()
  ],
  declarations: []
})
export class SharedModule { }
