import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoresService } from 'src/app/autores.service';
import { AutoresNamespace } from 'src/app/registro-autores.namespace';

@Component({
  selector: 'app-autoresform',
  templateUrl: './autoresform.component.html',
  styleUrls: ['./autoresform.component.css']
})
export class AutoresformComponent implements OnInit {

  public autorIngresado: AutoresNamespace.Autores = {
    nombre:'',
    apellido:'',
    cedula:'',
    generoLiterario:'',
    fechaNacimiento: new Date(),
    libros: []

  }
  public selectorGeneroLiterario: Array<string> = ['Género épico', 'Género lírico', 'Género dramático', 'Género didáctico', 'Género novela', 'Género relato'];

  public onSubmit(){
    this._autoresService.registroAutores.push({...this.autorIngresado});
    alert('Autor registrado exitosamente')
    this.autorIngresado={
      libros:[]
    };
  }
  public registrarLibros(){
      this._router.navigate(['/libros']);
  }
  public verTablas(){
    this._router.navigate(['/tablas'])
  }
  constructor(private _autoresService: AutoresService, private _router: Router) { }

  ngOnInit(): void {
  }

}
