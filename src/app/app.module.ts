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


import { HomeEstudianteComponent } from './home-estudiante/home-estudiante.component';

import { InicioEstudiantesComponent } from './inicio-estudiantes/inicio-estudiantes.component';
import { FormularioComponent } from  './formulario/formulario.component';
import { ActividadProfesorComponent } from './actividad-profesor/actividad-profesor.component';
import { FormularioEditarComponent } from './formulario-editar/formulario-editar.component';




const rutas = [
  {path: '', component: LoginComponent},
  {path: 'home' , component: HomeComponent},
  {path:'actividad-profesor',component: ActividadProfesorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'formulario',component:FormularioComponent},
  {path: 'home-estudiante', component: HomeEstudianteComponent},
  {path:  ' ', component: LoginComponent},
  {path:  'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'admin',component: AdminComponent},
  {path: ' app-formulario-editar ' , component: FormularioEditarComponent },
  {path: 'inicioestudiante', component: InicioEstudiantesComponent}

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
    HomeEstudianteComponent,
  
    InicioEstudiantesComponent,
  
    ActividadProfesorComponent,
    FormularioEditarComponent

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
