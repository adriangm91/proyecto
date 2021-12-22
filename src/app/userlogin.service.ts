import { Injectable } from '@angular/core';
import { UserLogin } from './userlogin.interface';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  public usuario: Array<UserLogin> = []

  constructor() { }
}
