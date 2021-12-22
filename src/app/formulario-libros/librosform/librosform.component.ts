import { Component, OnInit } from '@angular/core';
import { AutoresService } from 'src/app/autores.service';
import { AutoresNamespace } from 'src/app/registro-autores.namespace';

@Component({
  selector: 'app-librosform',
  templateUrl: './librosform.component.html',
  styleUrls: ['./librosform.component.css']
})
export class LibrosformComponent implements OnInit {

  public registroDeAutores: Array<AutoresNamespace.Autores>=[];
  public posicionAutor: number = 0;
  public libro: AutoresNamespace.Libros={
    titulo:'',
    annoPublicado: new Date(),
    generoLiterario:'',
  }
  public selectorGeneroLiterario: Array<string> = ['Género épico', 'Género lírico', 'Género dramático', 'Género didáctico', 'Género novela', 'Género relato'];

  public onRegister(){
    this.adjuntarLibroAutor();
    alert('El libro fue creado y adjuntado correctamente');
    console.log(this._autoresService)
    this.clearData();
  }

  private adjuntarLibroAutor(){
    this._autoresService.registroAutores[this.posicionAutor].libros?.push({...this.libro});
  }

  public clearData(){
    this.libro={
    titulo:'',
    annoPublicado: new Date(),
    generoLiterario:'',};
  }
  constructor(private _autoresService: AutoresService) { 
    this.registroDeAutores = this._autoresService.registroAutores;
  }
  ngOnInit(): void {
  }

}
