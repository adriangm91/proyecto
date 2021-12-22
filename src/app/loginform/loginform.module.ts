import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserformComponent } from './userform/userform.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserformComponent
  ],
  exports: [
    UserformComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginformModule { }
