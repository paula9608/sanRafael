import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';
import { TipoRolEnum, IRol } from '../interfaces/rol.interface';
import { Router } from '@angular/router';
import { IUsuario } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  usuario:IUsuario;
  constructor(protected apiService: ApiService, protected router: Router) { }

  ngOnInit() {
  }

  login() {
    this.apiService.login(this.username, this.password).subscribe(
      res => {
       
       this.usuario= res.body;
        this.redirectLogin(this.usuario.rol.tipo);
        console.log(res);
 
       },
      err => {       
        console.log(err);
        Swal.fire({
        type: 'error',
        title: 'ERROR',
        text: 'password o username incorrectos!',
      })
    }
    );
  }

  redirectLogin( rol: TipoRolEnum) {
    localStorage.setItem('id', this.usuario.id.toString());
    localStorage.setItem('nombre', this.usuario.nombre + ' ' + this.usuario.apellido);
    localStorage.setItem('grado', this.usuario.grado);
    localStorage.setItem('rol', this.usuario.rol.tipo)

    if (rol === TipoRolEnum.ROLE_PROFESOR) {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('/inicio-estudiante');
    }
  }
}
