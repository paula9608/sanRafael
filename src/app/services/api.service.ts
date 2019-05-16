import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imateria } from '../interfaces/materia.interface';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../interfaces/usuario.interface';
import { TipoRolEnum } from '../interfaces/rol.interface';

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
  
  login(username: string, password: string) {
    let  httpParams = new HttpParams()
    .append("username", username)
    .append("password", password);
    return this.httpClient.post<IUsuario>(environment.pathApi + '/usuarios/login', httpParams, {observe: 'response'})
  }
}
