import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresformComponent } from './formulario-autores/autoresform/autoresform.component';
import { LibrosformComponent } from './formulario-libros/librosform/librosform.component';
import { UserformComponent } from './loginform/userform/userform.component';
import { VistatablasComponent } from './tablas/vistatablas/vistatablas.component';

const routes: Routes = [
  {
    path: '',
    component: UserformComponent,
  },
  {
    path: 'autores',
    component: AutoresformComponent,
  },
  {
    path: 'libros',
    component: LibrosformComponent,
  },
  {
    path: 'tablas',
    component: VistatablasComponent,
  },
  {
    path: 'tablaLibros',
    component: LibrosformComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
