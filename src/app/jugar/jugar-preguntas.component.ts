import { Component, OnInit, Input } from '@angular/core';
import { Italler, GradoEnum } from '../interfaces/taller.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Imateria } from '../interfaces/materia.interface';
import { Irespuesta } from '../interfaces/respuesta.interface';
import { Ipregunta } from '../interfaces/pregunta.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jugar-preguntas',
  templateUrl: './jugar-preguntas.component.html',
  styleUrls: ['./jugar-preguntas.component.css']
})
export class JugarPreguntasComponent implements OnInit {
  taller: Italler;
  preguntas:Ipregunta[];
  respuestas:Irespuesta[];
  cantidadCorrectas = 0;
  id;
  indexActual = 0;
  preguntaActual:Ipregunta;

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute, private router: Router) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.apiService.findTallerById(this.id).subscribe(
      res => this.taller = res.body,
      err => console.log(err)
    );

    this.apiService.findPreguntasByTallerId(this.id).subscribe(
      res => { this.preguntas = res.body;this.cargarRespuestas(); },
      err => console.log(err)
    ); 

  }

  cargarRespuestas() {
    this.preguntaActual = this.preguntas[this.indexActual];
    this.apiService.findRespuestasByPreguntaId(this.preguntas[this.indexActual].id).subscribe(
      res => this.respuestas = res.body,
      err => console.log(err)
    );
  }

  seleccionar(respuesta: Irespuesta) {
    this.cantidadCorrectas = respuesta.correcta ? this.cantidadCorrectas + 1 : this.cantidadCorrectas; 
    this.indexActual = this.indexActual + 1;
    if(this.indexActual > (this.preguntas.length - 1)) {
      this.terminarJuego();
    }else {
      this.cargarRespuestas();
    }
  }

  terminarJuego() {
    let cad = 'Terminaste el juego! obtuviste ' + this.cantidadCorrectas + ' respuestas correctas';
    Swal.fire({
      title: cad,
      width: 600,
      padding: '3em',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/assets/snop.gif")
        center left
        no-repeat
      `
    })
  }
  
}
