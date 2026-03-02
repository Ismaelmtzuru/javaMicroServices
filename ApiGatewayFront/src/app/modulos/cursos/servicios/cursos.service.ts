import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CursosDTO } from 'src/app/modelos/CursosDTO';
import { environmnent } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private url = `${environmnent.gatewayUrl}/escuelas`;

  constructor(private http: HttpClient,private routes:Router) { }

  buscarCursoIdEscuela(idEscuela:Number){
    return this.http.get<CursosDTO[]>(`${this.url}/buscarCursos/${idEscuela}`);
  }

  guardarCurso(curso:CursosDTO){
    return this.http.post<CursosDTO>(`${this.url}/guardarCurso`,curso);
  }

  listarCursos(){
    return this.http.get<CursosDTO[]>(`${this.url}/listarCursos`);
  }

  eliminarCurso(curso:CursosDTO){
    return this.http.post(`${this.url}/eliminarCurso`,curso,{responseType:'text'});
  }

  editarCurso(curso:CursosDTO){
    return this.http.put(`${this.url}/editarCurso`,curso);
  }

  buscarCurso(id:Number){
    return this.http.post<CursosDTO>(`${this.url}/buscarCurso`,{idCurso:id});
  }

}
