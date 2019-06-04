
import { Component, OnInit, Input } from '@angular/core';
import { IUsuario } from '../interfaces/usuario.interface';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { TipoRolEnum } from '../interfaces/rol.interface';
import { GradoEnum } from '../interfaces/taller.interface';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  usuario = {} as IUsuario;
  keys = Object.keys;
  grados = GradoEnum;
  gradoEnum: any = {};
  @Input() usuarios;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  registrarUsuario() {
    this.usuario.grado = this.gradoEnum;
    this.apiService.registrarusuario(this.usuario, TipoRolEnum.ROLE_ESTUDIANTE).subscribe(
      res => {
        this.usuarios.push(res.body);
        console.log(res);
      },
      err => {

        console.log("aqui")
        console.log(err)
      }
    );

  }

}
