import { Component, OnInit, Input } from '@angular/core';
import { Italler, GradoEnum } from '../interfaces/taller.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Imateria } from '../interfaces/materia.interface';
import { Irespuesta } from '../interfaces/respuesta.interface';
import { Ipregunta, TipoEnum } from '../interfaces/pregunta.interface';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-jugar-preguntas',
  templateUrl: './jugar-preguntas.component.html',
  styleUrls: ['./jugar-preguntas.component.css']
})
export class JugarPreguntasComponent implements OnInit {
  taller: Italler;
  preguntas: Ipregunta[];
  respuestas: Irespuesta[];
  cantidadCorrectas = 0;
  id;
  indexActual = 0;
  preguntaActual: Ipregunta;
  ruta: string[];
  audios:String[];
  estado: boolean;
  tipos=TipoEnum;
  constructor(private apiService: ApiService, private actRoute: ActivatedRoute, private router: Router) {
    this.id = this.actRoute.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.apiService.findTallerById(this.id).subscribe(

      res => {
        this.taller = res.body;
        this.reproducir('./assets/goats.mp3', true);
      },
      err => console.log(err)
    );

    this.apiService.findPreguntasByTallerId(this.id).subscribe(
      res => {
        this.preguntas = res.body; this.cargarRespuestas()
          ;
      },
      err => console.log(err)
    );

  }

  cargarRespuestas() {
    this.preguntaActual = this.preguntas[this.indexActual];
    this.estado = false;
    this.cargarImagen();
    this.apiService.findRespuestasByPreguntaId(this.preguntas[this.indexActual].id).subscribe(
      res => this.respuestas = res.body,
      err => console.log(err)
    );
  }
 
  seleccionar(respuesta: Irespuesta) {
    if (respuesta.correcta) {
      this.reproducir('./assets/wonderful.mp3', false);
    } else {
      this.reproducir('./assets/bad.mp3', false);
    }
    this.reproducirVocal(respuesta.nombre);
    this.cantidadCorrectas = respuesta.correcta ? this.cantidadCorrectas + 1 : this.cantidadCorrectas;
    this.indexActual = this.indexActual + 1;
    if (this.indexActual > (this.preguntas.length - 1)) {
      this.terminarJuego();
    } else {
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
  reproducir(ruta: string, repetir: boolean) {
    const audio = new Audio(ruta);
    if (repetir == true) {
      audio.loop = true;
    }
    audio.play();

  }
  
  cargarImagen() {
 
    if (this.preguntaActual.tipo==this.tipos.TIPO_OPERACIONBASICA) {
      this.estado = true;

      var numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
      var cadenas = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez'];
      var operadores = ['suma', 'resta', 'multiplicacion'];
      var simbolos = ['+', '-', 'x'];
      var a = this.preguntaActual.nombre.substring(0, 1);
      var b = this.preguntaActual.nombre.substring(2, 3);
      var c = this.preguntaActual.nombre.substring(1, 2);
      var primero = ''; var segundo = ''; var operar = '';
      for (var _i = 0; _i < numeros.length; _i++) {

        if (a == numeros[_i]) {
          primero = cadenas[_i];
        }
        if (b == numeros[_i]) {
          segundo = cadenas[_i];
        }
      }



      for (var _i = 0; _i < simbolos.length; _i++) {

        if (c == simbolos[_i]) {
          operar = operadores[_i];
        }

      }

      this.ruta = ['./assets/' + primero + '.png', './assets/' + operar + '.png', './assets/' + segundo + '.png'];

    } if (this.preguntaActual.tipo== this.tipos.TIPO_VOCALES) {
      this.estado = true;
      var vocales = ['A', 'E', 'I', 'O', 'U'];
      var primero = '';
      var a = this.preguntaActual.nombre.substring(0, 1);
      for (var _i = 0; _i < vocales.length; _i++) {
        if (vocales[_i] == a) {
          primero = vocales[_i];
        }
      }
      this.ruta = ['./assets/' + primero + '.png'];

    }

  }
  reproducirVocal(letra: String){
    var a=letra.substring(0, 1);
    
    var vocales = ['A', 'E', 'I', 'O', 'U'];
    
var parametro='';
    for (let i = 0; i < vocales.length; i++) {
      if (a == vocales[i]) {
        parametro= vocales[i];
      }

    }
    var ruta= './assets/' + parametro + '.png'; 
    this.audios=[ruta];
    const audio = new Audio(ruta);
    audio.play();

  }
}