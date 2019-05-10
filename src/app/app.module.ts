import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DirectivaComponent } from './directiva/directiva.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule }   from '@angular/forms';
import { AlertsModule } from 'angular-alert-module';
import { InicioEstudiantesComponent } from './inicio-estudiantes/inicio-estudiantes.component';


const rutas = [
  {path: 'home' , component: HomeComponent},
  {path:  '', component: LoginComponent},
  {path:  'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'inicioestudiante', component: InicioEstudiantesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DirectivaComponent,
    LoginComponent,
    RegistroComponent,
    InicioEstudiantesComponent
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
