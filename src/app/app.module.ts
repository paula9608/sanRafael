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
import { AlertsModule } from 'angular-alert-module';
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

const rutas = [
  { path: 'preguntas/:id', component: PreguntasComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'actividad-profesor/:id', component: ActividadProfesorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'inicio-estudiante', component: InicioEstudiantesComponent },
  { path: 'vistaActividad', component: VistaActividadesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'vistaDocumentos', component: VistaDocumentosComponent },
  { path: 'vistaCosasInte', component: VistaCosaInteresComponent },
  { path: 'vistaJuegos', component: VistaMinijuegosComponent },
  { path: 'juego-parejas', component: JuegoParejaComponent },
  { path: 'vista-taller', component: VistaTallerComponent },
  { path: 'tallerEditar/:id', component: TallerEditarComponent },
  { path: 'jugar/preguntas/:id', component: JugarPreguntasComponent },
  {path:'jugar-fraciones', component:JugarFracionesComponent}
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
    JugarFracionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    AlertsModule.forRoot(),
    AlertsModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
