import { Component, OnInit } from '@angular/core';
import { TipoRolEnum } from '../interfaces/rol.interface';
import { IUsuario } from '../interfaces/usuario.interface';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-editar',
  templateUrl: './formulario-editar.component.html',
  styleUrls: ['./formulario-editar.component.css']
})
export class FormularioEditarComponent implements OnInit {
usuarios:IUsuario[];
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    
     
   }
   editarUsuario(usuario:IUsuario,tipo:TipoRolEnum) {
    this.apiService.deleteById(usuario.id,tipo).subscribe(
      res=>{
      this.usuarios=res.body
    console.log(res)},
      err => {
       
        console.log("aqui")
        console.log(err)
       
    }
    );
    this.apiService.registrarusuario(usuario, tipo).subscribe(
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
