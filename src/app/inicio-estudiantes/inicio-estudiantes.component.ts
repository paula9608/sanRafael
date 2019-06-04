import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-inicio-estudiantes',
  templateUrl: './inicio-estudiantes.component.html',
  styleUrls: ['./inicio-estudiantes.component.css']
})
export class InicioEstudiantesComponent implements OnInit {

  nombre: string;
  constructor() { }

  ngOnInit() {
    this.nombre =  localStorage.getItem('nombre');
  }

}
