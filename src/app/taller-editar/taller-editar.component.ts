import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Ipregunta } from '../interfaces/pregunta.interface';

@Component({
  selector: 'app-taller-editar',
  templateUrl: './taller-editar.component.html',
  styleUrls: ['./taller-editar.component.css']
})
export class TallerEditarComponent implements OnInit {
  idTaller;
  preguntas: Ipregunta[];
  
  constructor(private actRoute: ActivatedRoute, private apiService: ApiService) {
    this.idTaller = this.actRoute.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.apiService.findPreguntasByTallerId(this.idTaller).subscribe(
      res => this.preguntas = res.body,
      err => console.log(err)
    )
  }
  eliminarPregunta(id:number){
    this.apiService.deletePregunta(id,this.idTaller).subscribe(
      res => this.preguntas=res.body,
      err => console.log(err)
    );
    
      }
}
