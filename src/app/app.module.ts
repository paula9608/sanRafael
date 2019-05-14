import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin-estudiantes/admin-estudiantes.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule }   from '@angular/forms';
import { AlertsModule } from 'angular-alert-module';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeEstudianteComponent } from './home-estudiante/home-estudiante.component';
const rutas = [
  {path: '', component: LoginComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'formulario',component:FormularioComponent},
  {path: 'home-estudiante', component: HomeEstudianteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    RegistroComponent,
    FormularioComponent,
    HomeEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    FormsModule,
    AlertsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
