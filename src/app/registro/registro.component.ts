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
  usuarios:IUsuario[];
  lista=[];
  tipo: TipoRolEnum;
  constructor(private apiService: ApiService, private router: Router) { 
    this.tipo=TipoRolEnum.ROLE_PROFESOR;
  }
  

  ngOnInit() {
    this.apiService.findByRolTipo(this.tipo).subscribe(
      res=>{this.usuarios=res.body;
        this.usuarios.forEach(element => {
          this.lista.push(element.username);
        });  },

      err=>console.log(err)
    )
  }

  registrarUsuario() {
    if(this.validarContrasena() && this.validarRegistro()) {
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
validarRegistro():boolean{
this.lista.forEach(element => {
  if(this.usuario.username!=element)  {
    Swal.fire({
      type: 'error',
      title: 'ERROR',
      text: 'El username ya existe!',
    })

    return false;
  }
});
return true;
}
}
