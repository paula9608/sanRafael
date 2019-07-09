import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-login',
  templateUrl: './inicio-login.component.html',
  styleUrls: ['./inicio-login.component.css']
})
export class InicioLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.clear();
  }

}
