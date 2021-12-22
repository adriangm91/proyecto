import { Component, Input, OnInit } from '@angular/core';
import { AutoresNamespace } from 'src/app/registro-autores.namespace';

@Component({
  selector: 'app-tabla-libros',
  templateUrl: './tabla-libros.component.html',
  styleUrls: ['./tabla-libros.component.css']
})
export class TablaLibrosComponent implements OnInit {

  @Input() libros?: Array<AutoresNamespace.Libros> = [];
  @Input() autorNombre?: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
