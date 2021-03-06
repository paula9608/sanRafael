import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../interfaces/usuario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-estudiantes',
  templateUrl: './inicio-estudiantes.component.html',
  styleUrls: ['./inicio-estudiantes.component.css']
})
export class InicioEstudiantesComponent implements OnInit {

  nombre: string;
  grado: string;
  constructor(private router:Router) { }

  ngOnInit() {
    this.nombre =  localStorage.getItem('nombre');
    this.grado= localStorage.getItem('grado');
  }
  reproducir(ruta: string, repetir: boolean) {
    const audio = new Audio(ruta);
    if (repetir == true) {
      audio.loop = true;
    }
    audio.play();

  }
cerrar(){
  localStorage.clear();
  this.router.navigateByUrl('/');
  
}
}
