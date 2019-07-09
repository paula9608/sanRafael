import { Component, OnInit } from '@angular/core';
import { Imateria } from '../interfaces/materia.interface';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  materias: Imateria[];
  constructor(protected apiService: ApiService,private router:Router) { }

  ngOnInit() {
    this.apiService.findAllmaterias().subscribe(
      response => this.materias = response.body,
      err => console.log(err)
    );
  }
cerrar(){
  localStorage.clear();
  this.router.navigateByUrl('/');
  
}
}
