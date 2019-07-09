import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin-estudiantes/admin-estudiantes.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { FormsModule } from '@angular/forms';

import { VistaTallerComponent } from './vista-taller/vista-taller.component';
import { InicioEstudiantesComponent } from './inicio-estudiantes/inicio-estudiantes.component';
import { TallerEditarComponent } from './taller-editar/taller-editar.component';
import { ActividadProfesorComponent } from './actividad-profesor/actividad-profesor.component';
import { FormularioComponent } from './formulario/formulario.component';
import { VistaActividadesComponent } from './vista-actividades/vista-actividades.component';
import { VistaDocumentosComponent } from './vista-documentos/vista-documentos.component';
import { VistaCosaInteresComponent } from './vista-cosa-interes/vista-cosa-interes.component';
import { VistaMinijuegosComponent } from './vista-minijuegos/vista-minijuegos.component';
import { JuegoParejaComponent } from './juegos/juego-pareja.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { JugarPreguntasComponent } from './jugar/jugar-preguntas.component';
import { JugarFracionesComponent } from './jugar-fraciones/jugar-fraciones.component';
import { LoginEstudianteComponent } from './login-estudiante/login-estudiante.component';
import { InicioLoginComponent } from './inicio-login/inicio-login.component';
import { CanActivateViaAuthGuardComponent } from './can-activate-via-auth-guard/can-activate-via-auth-guard.component';

const rutas = [
  { path: 'preguntas/:id', component: PreguntasComponent },
  { path: 'home', component: HomeComponent },
  { path: 'actividad-profesor/:id', component: ActividadProfesorComponent,canActivate:[CanActivateViaAuthGuardComponent]},
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'admin', component: AdminComponent , canActivate:[CanActivateViaAuthGuardComponent]},
  { path: 'formulario', component: FormularioComponent },
  
  { path: 'inicio-estudiante', component: InicioEstudiantesComponent },
  { path: 'vistaActividad', component: VistaActividadesComponent,canActivate:[CanActivateViaAuthGuardComponent] },
  { path: 'login', component: LoginComponent },
  
  { path: 'vistaDocumentos', component: VistaDocumentosComponent,canActivate:[CanActivateViaAuthGuardComponent]},
  { path: 'vistaCosasInte', component: VistaCosaInteresComponent,canActivate:[CanActivateViaAuthGuardComponent] },
  { path: 'vistaJuegos', component: VistaMinijuegosComponent,canActivate:[CanActivateViaAuthGuardComponent]},
  { path: 'juego-parejas', component: JuegoParejaComponent,canActivate:[CanActivateViaAuthGuardComponent]},
  { path: 'vista-taller', component: VistaTallerComponent,canActivate:[CanActivateViaAuthGuardComponent]},
  { path: 'tallerEditar/:id', component: TallerEditarComponent,canActivate:[CanActivateViaAuthGuardComponent]},
  { path: 'jugar/preguntas/:id', component: JugarPreguntasComponent,canActivate:[CanActivateViaAuthGuardComponent]},
  {path:'jugar-fraciones', component:JugarFracionesComponent,canActivate:[CanActivateViaAuthGuardComponent]},
  {path:'login-estudiante', component:LoginEstudianteComponent},
  {path:'',component:InicioLoginComponent}
 
];


@NgModule({
 
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PreguntasComponent,
    AdminComponent,
    LoginComponent,
    RegistroComponent,
    FormularioComponent,
    InicioEstudiantesComponent,
    InicioEstudiantesComponent,
    ActividadProfesorComponent,
    VistaActividadesComponent,
    VistaDocumentosComponent,
    VistaCosaInteresComponent,
    VistaTallerComponent,
    TallerEditarComponent,
    UploadFilesComponent,
    JuegoParejaComponent,
    VistaMinijuegosComponent,
    JugarPreguntasComponent,
    JugarFracionesComponent,
    LoginEstudianteComponent,
    InicioLoginComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    
    FormsModule
  ],
  providers: [CanActivateViaAuthGuardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
