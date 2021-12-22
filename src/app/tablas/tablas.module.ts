import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistatablasComponent } from './vistatablas/vistatablas.component';
import { TablaLibrosComponent } from './tabla-libros/tabla-libros.component';




@NgModule({
  declarations: [
    VistatablasComponent,
    TablaLibrosComponent
  ],
  exports: [
    VistatablasComponent,
    TablaLibrosComponent
  ],
  imports: [
    CommonModule
    

  ]
})
export class TablasModule { }
