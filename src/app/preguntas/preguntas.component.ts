import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ipregunta } from '../interfaces/pregunta.interface';
import { Irespuesta } from '../interfaces/respuesta.interface';
import { ApiService } from '../services/api.service';
import { Italler } from '../interfaces/taller.interface';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  idtaller;
  taller: Italler;
  pregunta = {} as Ipregunta;
  respuestas: Irespuesta[] = [{} as Irespuesta, {} as Irespuesta, {} as Irespuesta, {} as Irespuesta];

  constructor(private actRoute: ActivatedRoute, protected apiService: ApiService) { 
    this.idtaller = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.apiService.findTallerById(this.idtaller).subscribe(
      res => this.taller = res.body,
      err => console.log(err)
    )
  }

  guardar() {
    this.pregunta.taller = this.taller;
    this.apiService.guardarPregunta(this.pregunta).subscribe(
      res => {
        this.pregunta = res.body;

        let cont = 0;
        for (const res of this.respuestas) {
          res.correcta = cont == 0 ? true : false;
          res.pregunta =  this.pregunta;
          cont++;
        }

        this.apiService.guardarRespuestas(this.respuestas).subscribe(
            res => {
              this.respuestas = res.body;
              window.history.back();
            },
            err => console.log(err)
          );
      }, 
      err => console.log(err)
    )
  }
 
}
