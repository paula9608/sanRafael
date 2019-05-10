import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-estudiantes.component.html',
  styleUrls: ['./admin-estudiantes.component.css']

})
export class AdminComponent implements OnInit {

  

  constructor(protected apiService: ApiService) { }

  ngOnInit() {
    
  }

}