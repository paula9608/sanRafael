import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../interfaces/usuario.interface';
import { Italler } from '../interfaces/taller.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-vista-actividades',
  templateUrl: './vista-actividades.component.html',
  styleUrls: ['./vista-actividades.component.css']
})
export class VistaActividadesComponent implements OnInit {
  estudiante:IUsuario;
  talleres:Italler[];
  nombre: string;
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.nombre =  localStorage.getItem('nombre');
    this.apiService.findTallerByGrado(localStorage.getItem('grado')).subscribe(
      res => this.talleres = res.body,
      err => console.log(err)
    )

  }



}
