import { Component, OnInit, Input } from '@angular/core';
import { Italler, GradoEnum } from '../interfaces/taller.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Imateria } from '../interfaces/materia.interface';
import { ActividadProfesorComponent } from '../actividad-profesor/actividad-profesor.component';

@Component({
  //mmama
  selector: 'app-vista-taller',
  templateUrl: './vista-taller.component.html',
  styleUrls: ['./vista-taller.component.css']
})
export class VistaTallerComponent implements OnInit {
  @Input() talleres; //This tells our component to treat quote as an input property from the parent compnent
  taller = {} as Italler;
  idMateria;
  materia: Imateria;
  keys = Object.keys;
  grados = GradoEnum;
  activitad:ActividadProfesorComponent;

  constructor(private apiService: ApiService, private actRoute: ActivatedRoute, private router: Router) { 
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
    this.apiService.guardarTaller(this.taller).subscribe(
      res=> {
        this.taller = res.body;
        this.talleres.push(this.taller);
      },
      err =>console.log(err)
  )

}
}
