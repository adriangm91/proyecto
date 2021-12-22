import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosformComponent } from './librosform/librosform.component';
import { FormsModule } from '@angular/forms';
import { FormularioAutoresModule } from '../formulario-autores/formulario-autores.module';



@NgModule({
  declarations: [
    LibrosformComponent
  ],
  exports: [
    LibrosformComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormularioLibrosModule { }
