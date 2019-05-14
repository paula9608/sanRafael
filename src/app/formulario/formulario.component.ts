import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../interfaces/usuario.interface';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

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
   
  }
}
