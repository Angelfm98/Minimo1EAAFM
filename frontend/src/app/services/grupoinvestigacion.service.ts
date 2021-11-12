import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GrupoInvestigacion } from '../models/grupoinvestigacion'

@Injectable({
  providedIn: 'root'
})
export class GrupoinvestigacionService {

  constructor(private http: HttpClient) { }

  //Listar Personas
  getLista(): Observable<GrupoInvestigacion[]>{
    return this.http.get<GrupoInvestigacion[]>(environment.apiURL + "/gruposinvestigacion");
  }

  //Listar Una Persona a través del dni como parametro unico en cada individuo
  getPersona(dni: String): Observable<GrupoInvestigacion>{
    return this.http.get<GrupoInvestigacion>(environment.apiURL + "/gruposinvestigacion/" + dni);
  }

  //Añadir una persona
  addPersona(nuevaPersona: GrupoInvestigacion): Observable<any>{
    return this.http.post(environment.apiURL + '/gruposinvestigacion/new', nuevaPersona);
  }

  //Editar una persona
  modificarPersona(personamodificada: GrupoInvestigacion, dni: String): Observable<any>{
    return this.http.put(environment.apiURL + "/gruposinvestigacion/update/" + dni, personamodificada);
  }
}
