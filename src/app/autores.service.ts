import { Injectable } from '@angular/core';
import { AutoresNamespace } from './registro-autores.namespace';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  public registroAutores : Array<AutoresNamespace.Autores> = [];
  constructor() { }
}
