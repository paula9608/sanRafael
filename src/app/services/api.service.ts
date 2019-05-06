import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imateria } from '../interfaces/materia.interface';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected httpClient: HttpClient) { }

  findAllmaterias(): Observable<HttpResponse<Imateria[]>> {
    return this.httpClient.get<Imateria[]>(environment.pathApi + '/materias', {observe: 'response'});
  }

  registrarusuario(usuario: IUsuario): Observable<HttpResponse<IUsuario>> {
    return this.httpClient.post<IUsuario>(environment.pathApi + '/usuarios', usuario,{observe: 'response'});
  }
}
