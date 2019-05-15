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
import { VistaActividadesComponent } from './vista-actividades/vista-actividades.component';
import { VistaDocumentosComponent } from './vista-documentos/vista-documentos.component';
import { VistaCosaInteresComponent } from './vista-cosa-interes/vista-cosa-interes.component';




const rutas = [
  {path: '', component: LoginComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'vistaActividad', component: VistaActividadesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'formulario',component:FormularioComponent},
  {path: 'home-estudiante', component: HomeEstudianteComponent},
  {path:  ' ', component: LoginComponent},
  {path:  'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'admin',component: AdminComponent},
  {path: ' formulario ' , component: FormularioComponent },
  {path: 'inicioestudiante', component: InicioEstudiantesComponent},
  {path: 'vistaDocumentos', component: VistaDocumentosComponent},
  {path: 'vistaCosasInte', component: VistaCosaInteresComponent}
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
    VistaActividadesComponent,
    VistaDocumentosComponent,
    VistaCosaInteresComponent

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
