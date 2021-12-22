import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLogin } from 'src/app/userlogin.interface';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  public usuarioIngresado: UserLogin = {
    user:'',
    password:''
  }
  
  public correctUser:string ='adrian';
  public correctPassword:string = 'garcia';
  

  public onSubmit(){
    if(this.usuarioIngresado.user === this.correctUser && this.usuarioIngresado.password === this.correctPassword){
      alert('Usuario y contraseña correcta');
      console.log(this.usuarioIngresado)
      this._router.navigate(['/autores'])
    }else{
      alert('Usuario o contraseña incorrecta')
    } 
    this.usuarioIngresado = {
      user:'',
      password:''
    }
  }

  constructor(private _router: Router) { 


   }

  ngOnInit(): void {
  }

}
