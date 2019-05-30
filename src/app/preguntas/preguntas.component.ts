import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  idtaller;

  constructor(private actRoute: ActivatedRoute) { 
    this.idtaller = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
