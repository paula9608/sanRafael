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
<<<<<<< HEAD
import { InicioEstudiantesComponent } from './inicio-estudiantes/inicio-estudiantes.component';


=======
import { FormularioComponent } from './formulario/formulario.component';
>>>>>>> 3a97af57bf095f30279c0533263d04c1e4962c33
const rutas = [
  {path: 'home' , component: HomeComponent},
  {path:  '', component: LoginComponent},
  {path:  'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
<<<<<<< HEAD
  {path: 'inicioestudiante', component: InicioEstudiantesComponent}
=======
  {path:'admin',component:AdminComponent},
  {path:'formulario',component:FormularioComponent}
>>>>>>> 3a97af57bf095f30279c0533263d04c1e4962c33
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    RegistroComponent,
<<<<<<< HEAD
    InicioEstudiantesComponent
=======
    FormularioComponent
>>>>>>> 3a97af57bf095f30279c0533263d04c1e4962c33
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
