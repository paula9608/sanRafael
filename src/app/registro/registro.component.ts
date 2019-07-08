import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../interfaces/usuario.interface';
import Swal from 'sweetalert2'
import { ApiService } from '../services/api.service';
import { TipoRolEnum } from '../interfaces/rol.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario = {} as IUsuario;
  confirmPassword: string;

  constructor(private apiService: ApiService, private router: Router) { 
  }
  

  ngOnInit() {
  }

  registrarUsuario() {
    if(this.validarContrasena()) {
      this.apiService.registrarusuario(this.usuario, TipoRolEnum.ROLE_PROFESOR).subscribe(
        res => this.router.navigateByUrl('/login'),
        err => console.log(err))
    }
  }

  validarContrasena(): boolean{
   if(this.usuario.password != this.confirmPassword) {
      Swal.fire({
        type: 'error',
        title: 'ERROR',
        text: 'Las contraseñas no coinciden!',
      })

      return false;
   }
   return true;
  }
validarNombre(string){ //solo letras
var out="";
var filtro='abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
for (var i = 0; i < string.length; i++) {
  if(filtro.indexOf(string.charAt(i))!=-1){
  out+=string.chartAt(i);
   return out;
}
}
Swal.fire({
  type: 'error',
  title: 'ERROR',
  text: 'El campo nombre no acepta valores numericos!',
})
return "";
}
}
