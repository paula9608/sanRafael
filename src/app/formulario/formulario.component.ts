import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../interfaces/usuario.interface';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { TipoRolEnum } from '../interfaces/rol.interface';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  usuario = {} as IUsuario;
  
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }
  registrarUsuario() {
     this.apiService.registrarusuario(this.usuario, TipoRolEnum.ROLE_ESTUDIANTE).subscribe(
      res => {
      
        console.log(res);
  
        },
       err => {
        
         console.log("aqui")
         console.log(err)
        
     }
     );
    
  }
  
}
