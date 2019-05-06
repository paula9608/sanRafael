import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../interfaces/usuario.interface';
import { AlertsService } from 'angular-alert-module';
import Swal from 'sweetalert2'
import { ApiService } from '../services/api.service';
import { RouterModule, Router } from '@angular/router';

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
      this.apiService.registrarusuario(this.usuario).subscribe(
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

}
