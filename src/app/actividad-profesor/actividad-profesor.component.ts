import { Component, OnInit } from '@angular/core';
import { Italler } from '../interfaces/taller.interface';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-actividad-profesor',
  templateUrl: './actividad-profesor.component.html',
  styleUrls: ['./actividad-profesor.component.css']
})
export class ActividadProfesorComponent implements OnInit {
  idMateria;
  talleres:Italler[];

  constructor(private actRoute: ActivatedRoute,private apiService: ApiService) { 
    this.idMateria = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.apiService.findtalleresByMateriaId(this.idMateria).subscribe(
      res => this.talleres = res.body,
      err => console.log(err)
    )
  }
  clean(){

  }
  eliminarTaller(id:number){
    this.apiService.deleteTaller(id,this.idMateria).subscribe(
      res => this.talleres=res.body,
      err => console.log(err)
    );
    
      }

}
