import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginformModule } from './loginform/loginform.module';
import { FormularioAutoresModule } from './formulario-autores/formulario-autores.module';
import { FormularioLibrosModule } from './formulario-libros/formulario-libros.module';
import { UserformComponent } from './loginform/userform/userform.component';
import { VistatablasComponent } from './tablas/vistatablas/vistatablas.component';
import { TablasModule } from './tablas/tablas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginformModule,
    FormularioAutoresModule,
    FormularioLibrosModule,
    TablasModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
