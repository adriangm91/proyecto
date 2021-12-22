import { Component, OnInit } from '@angular/core';
import { AutoresService } from 'src/app/autores.service';
import { AutoresNamespace } from 'src/app/registro-autores.namespace';

@Component({
  selector: 'app-vistatablas',
  templateUrl: './vistatablas.component.html',
  styleUrls: ['./vistatablas.component.css']
})
export class VistatablasComponent implements OnInit {

  public autores: Array<AutoresNamespace.Autores>=[];
  public autorSelected: AutoresNamespace.Autores = {
    libros:[]
  };

  public verLibros(autor: AutoresNamespace.Autores){
    this.autorSelected=autor;
  }
  constructor(private _autoresService: AutoresService) {
    this.autores = this._autoresService.registroAutores;
   }

  ngOnInit(): void {
  }

}
