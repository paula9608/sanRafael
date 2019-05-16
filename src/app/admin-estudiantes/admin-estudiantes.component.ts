import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

import Swal from 'sweetalert2';
import { IUsuario } from '../interfaces/usuario.interface';
import { TipoRolEnum } from '../interfaces/rol.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-estudiantes.component.html',
  styleUrls: ['./admin-estudiantes.component.css']

})
export class AdminComponent implements OnInit {
  usuarios: IUsuario[];
  usuario: IUsuario;
  rol=TipoRolEnum.ROLE_ESTUDIANTE;
  constructor(protected apiService: ApiService) { }

  ngOnInit() {
  
    this.apiService.findByRolTipo(this.rol).subscribe(
      res => {
       
        this.usuarios= res.body;
         
         console.log(res);
  
        },
       err => {
        
         console.log("aqui")
         console.log(err)
         Swal.fire({
         type: 'error',
         title: 'ERROR',
         text: 'password o username incorrectos!',
       })
     }
     );
   }
   eliminarUsuario(id:number,tipo:TipoRolEnum){
    this.apiService.deleteById(id,tipo).subscribe(
      res => {
       
        this.usuarios=res.body;
        console.log(res);
    
        },
       err => {
        
         console.log("aqui")
         console.log(err)
        
     }
    );
    
      }
     
  }