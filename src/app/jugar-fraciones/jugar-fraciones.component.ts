import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugar-fraciones',
  templateUrl: './jugar-fraciones.component.html',
  styleUrls: ['./jugar-fraciones.component.css']
})
export class JugarFracionesComponent implements OnInit {
  readonly max = 10;
  index = 0;
  fraccionesTop = new Array(this.max);
  fraccionesBottom = new Array(this.max);
  numTop: number;
  numBottom: number;
  botones: boolean[];
  cantidadSel = 0;
  cantidadBuenas = 0;

  constructor(private router: Router) {
    
   }

  ngOnInit() {
    this.inicializarJuego();
  }

  inicializarJuego() {
    this.generarFracciones(this.max);
    this.numTop = this.fraccionesTop[0];
    this.numBottom = this.fraccionesBottom[0];
    this.inicializarBotones(this.numBottom);
    this.reproducir('./assets/goats.mp3', true);
  }
  
  inicializarBotones(cant: number) {
    this.botones = new Array(cant).fill(false);
  }

  generarFracciones(max) {
    for (var i = 0; i < max; i++) {

      let numAleatorioTop = Math.floor(Math.random() * (this.fraccionesTop.length + 1));
      let numAleatorioBottom = Math.floor(Math.random() * (this.fraccionesBottom.length + 1));

      if(numAleatorioTop > numAleatorioBottom) {
        this.fraccionesTop[i] = numAleatorioBottom == 0 ? numAleatorioBottom + 1 : numAleatorioBottom;
        this.fraccionesBottom[i] = numAleatorioTop == 0 ? numAleatorioTop + 1 : numAleatorioTop;
      } else {
        this.fraccionesTop[i] = numAleatorioTop == 0 ? numAleatorioTop + 1 : numAleatorioTop;
        this.fraccionesBottom[i] = numAleatorioBottom == 0 ? numAleatorioBottom + 1 : numAleatorioBottom;
      }
    }
  }

  seleccionar(index: number) {
    this.botones[index] = !this.botones[index];
    this.cantidadSel = this.botones[index] ? this.cantidadSel + 1 : this.cantidadSel;
  }

  siguiente() {
    if(this.index == this.max - 1) {
      Swal.fire(
        'Buen trabajo!',
        'Tuviste ' + this.cantidadBuenas + ' de ' + this.max + '!',
        'success'
       
      );
      this.router.navigateByUrl('/vistajuegos');
      return;
    }
    this.cantidadBuenas = this.numTop == this.cantidadSel ? this.cantidadBuenas + 1 : this.cantidadBuenas;
    if(this.botones[this.index]==false){
      this.reproducir('./assets/bad.mp3', false)
    }else{
      this.reproducir('./assets/wonderful.mp3', false)
    }
    this.cantidadSel = 0;
    this.index++;
    this.numTop = this.fraccionesTop[this.index];
    this.numBottom = this.fraccionesBottom[this.index];
    this.inicializarBotones(this.numBottom);
  }
  reproducir(ruta: string, repetir: boolean) {
    const audio = new Audio(ruta);
    if (repetir == true) {
      audio.loop = true;
    }
    audio.play();

  }

}