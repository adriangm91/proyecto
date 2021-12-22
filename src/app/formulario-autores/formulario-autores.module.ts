import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoresformComponent } from './autoresform/autoresform.component';
import { FormsModule } from '@angular/forms';
import { FormularioLibrosModule } from '../formulario-libros/formulario-libros.module';



@NgModule({
  declarations: [
    AutoresformComponent
  ],
  exports: [
    AutoresformComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormularioAutoresModule { }
