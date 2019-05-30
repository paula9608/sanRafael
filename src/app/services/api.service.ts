import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imateria } from '../interfaces/materia.interface';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../interfaces/usuario.interface';
import { TipoRolEnum } from '../interfaces/rol.interface';
import { Italler } from '../interfaces/taller.interface';
import { Ipregunta } from '../interfaces/pregunta.interface';
import { identifierModuleUrl } from '@angular/compiler';
import { Irespuesta } from '../interfaces/respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected httpClient: HttpClient) { }
  findByRolTipo(rol:TipoRolEnum): Observable<HttpResponse<IUsuario[]>> {
   
    return this.httpClient.get<IUsuario[]>(environment.pathApi + '/usuarios'+ '?tipo=' + rol,{observe: 'response'})
  }
  findAllmaterias(): Observable<HttpResponse<Imateria[]>> {
    return this.httpClient.get<Imateria[]>(environment.pathApi + '/materias', {observe: 'response'});
  }
   deleteById(id:number,tipo:TipoRolEnum):Observable<HttpResponse<IUsuario[]>>{
         return this.httpClient.delete<IUsuario[]>(environment.pathApi+'/usuarios/'+id+'?tipo=' + tipo,{observe:'response'})
   }
  registrarusuario(usuario: IUsuario, tipoRol: TipoRolEnum): Observable<HttpResponse<IUsuario>> {
    return this.httpClient.post<IUsuario>(environment.pathApi + '/usuarios' + '?rol=' + tipoRol, usuario,{observe: 'response'});
  }

  guardarTaller(taller:Italler):Observable<HttpResponse<Italler>>{
    return this.httpClient.post<Italler>(environment.pathApi + '/talleres',taller,{observe: 'response'})
  }
  findMateria(id:number):Observable<HttpResponse<Imateria>>{
    return this.httpClient.get<Imateria>(environment.pathApi + '/materias/'+id, {observe: 'response'});
  }
  findtalleresByMateriaId(id:number):Observable<HttpResponse<Italler[]>>{
    return this.httpClient.get<Italler[]>(environment.pathApi + '/talleres/materia/' + id, {observe: 'response'});
  }
deleteTaller(id:number,idMateria:number):Observable<HttpResponse<Italler[]>>{
  return this.httpClient.delete<Italler[]>(environment.pathApi+'/talleres/'+id+'?idMateria=' + idMateria,{observe:'response'})
}

  findPreguntasByTallerId(id:number):Observable<HttpResponse<Ipregunta[]>>{
    return this.httpClient.get<Ipregunta[]>(environment.pathApi+'/preguntas/taller'+identifierModuleUrl,{observe: 'response'})
  }
  guardarPregunta(pregunta:Ipregunta):Observable<HttpResponse<Ipregunta>>{
   return this.httpClient.post<Ipregunta>(environment.pathApi+'/preguntas',pregunta,{observe: 'response'})
  }


  findRespuestasByPreguntaId(id:number):Observable<HttpResponse<Irespuesta[]>>{
    return this.httpClient.get<Irespuesta[]>(environment.pathApi+'/respuestas/pregunta'+identifierModuleUrl,{observe: 'response'})
  }
  guardarRespuesta(respuesta:Irespuesta):Observable<HttpResponse<Irespuesta>>{
   return this.httpClient.post<Irespuesta>(environment.pathApi+'/respuestas',respuesta,{observe: 'response'})
  }
 

  login(username: string, password: string) {
    let  httpParams = new HttpParams()
    .append("username", username)
    .append("password", password);
    return this.httpClient.post<IUsuario>(environment.pathApi + '/usuarios/login', httpParams, {observe: 'response'})
  }
}
