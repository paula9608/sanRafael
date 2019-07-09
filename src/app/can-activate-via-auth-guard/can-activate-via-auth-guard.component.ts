import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-can-activate-via-auth-guard',
  templateUrl: './can-activate-via-auth-guard.component.html',
  styleUrls: ['./can-activate-via-auth-guard.component.css']
})

export class CanActivateViaAuthGuardComponent implements CanActivate {
  constructor(private router:Router){}
  canActivate(){
    let variable=localStorage.getItem('id');
if(variable==null || variable==undefined){
  console.log("no esta logueado");
  this.router.navigate(['/']);
  return false;
}
  
return true;
}
}