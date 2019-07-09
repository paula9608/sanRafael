import { Component, OnInit, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
  

export class CanActivateViaAuthGuardComponent implements CanActivate {
  constructor(private router:Router){}
  canActivate(){
    let variable=localStorage.getItem('id');
if(variable==null || variable==undefined){
  console.log("no esta logueado");
  this.router.navigateByUrl('/');
  return false;
}
  
return true;
}
}