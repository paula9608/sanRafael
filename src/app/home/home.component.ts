import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Imateria } from '../interfaces/materia.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  materias: Imateria[];

  constructor(protected apiService: ApiService) { }

  ngOnInit() {
    this.apiService.findAllmaterias().subscribe(
      response => this.materias = response.body,
      err => console.log(err)
    );
  }

}
