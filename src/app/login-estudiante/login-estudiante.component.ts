import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';
import { TipoRolEnum, IRol } from '../interfaces/rol.interface';
import { Router } from '@angular/router';
import { IUsuario } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-login-estudiante',
  templateUrl: './login-estudiante.component.html',
  styleUrls: ['./login-estudiante.component.css']
})
export class LoginEstudianteComponent implements OnInit {
  username: string;
  password: string;
  usuario:IUsuario;
  usuarios:IUsuario[];
  tipo: TipoRolEnum   
  constructor(protected apiService: ApiService, protected router: Router) {
    this.tipo=TipoRolEnum.ROLE_ESTUDIANTE;
   }
        
  ngOnInit() {
    this.apiService.findByRolTipo(this.tipo).subscribe(
      res=>this.usuarios=res.body,
      err=>console.log(err)
    )
  }

  
}
