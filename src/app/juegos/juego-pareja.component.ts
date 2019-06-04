import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-pareja',
  templateUrl: './juego-pareja.component.html',
  styleUrls: ['./juego-pareja.component.css']
})
export class JuegoParejaComponent implements OnInit {

  cartas = new Array( 
    {nombre: '1', seleccion: false}, {nombre: '2', seleccion: false}, 
    {nombre: '3', seleccion: false}, {nombre: '4', seleccion: false}, 
    {nombre: '5', seleccion: false}, {nombre: '6', seleccion: false}, 
    {nombre: '7', seleccion: false}, {nombre: '8', seleccion: false}, 
    {nombre: '1', seleccion: false}, {nombre: '2', seleccion: false}, 
    {nombre: '3', seleccion: false}, {nombre: '4', seleccion: false}, 
    {nombre: '5', seleccion: false}, {nombre: '6', seleccion: false}, 
    {nombre: '7', seleccion: false}, {nombre: '8', seleccion: false} );
    intentos = 0;
    jugada1 = "";
    jugada2 = "";
    identificadorJ1 = "";
    identificadorJ2 = "";
      

  constructor() { }

  ngOnInit() {
  }

}
