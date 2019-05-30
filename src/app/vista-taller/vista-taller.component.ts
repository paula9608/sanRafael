import { Component, OnInit } from '@angular/core';
import { Italler, GradoEnum } from '../interfaces/taller.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Imateria } from '../interfaces/materia.interface';
import { ActividadProfesorComponent } from '../actividad-profesor/actividad-profesor.component';

@Component({
  selector: 'app-vista-taller',
  templateUrl: './vista-taller.component.html',
  styleUrls: ['./vista-taller.component.css']
})
export class VistaTallerComponent implements OnInit {
  taller = {} as Italler;
  idMateria;
  materia: Imateria;
  keys = Object.keys;
  grados = GradoEnum;
    activitad:ActividadProfesorComponent;

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute) { 
    this.idMateria = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.apiService.findMateria(this.idMateria).subscribe(
      res => this.materia = res.body,
      err => console.log(err)
    );
  }

  guardarTaller(){
    this.taller.materia = this.materia;
    console.log(this.taller);
    this.apiService.guardarTaller(this.taller).subscribe(
      res=> {
        this.taller=res.body;
      },
      err =>console.log(err)
  )

}
}
