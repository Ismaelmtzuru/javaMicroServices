import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environmnent } from 'src/environments/environment';
import { EstudiantesDTO } from 'src/app/modelos/EstudiantesDTO';
import { Estudiantes } from 'src/app/modelos/Estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private url = `${environmnent.gatewayUrl}/escuelas`;
  constructor(private http: HttpClient, private routes: Router) { }

  //Estudiantes
listarTodosEstudiantes(){
  return this.http.get<EstudiantesDTO[]>(`${this.url}/listarEstudiantes`);
}

agregarEstudiante(estudiante:Estudiantes){
  return this.http.post<Estudiantes>(`${this.url}/agregarEstudiante`, estudiante);
}

eliminarEstudiante(estudiante:EstudiantesDTO){
  return this.http.post(`${this.url}/eliminarEstudiante`, estudiante,{responseType:'text'});
}

editarEstudiante(estudiante:EstudiantesDTO){
  return this.http.put<EstudiantesDTO>(`${this.url}/editarEstudiante`, estudiante);
}

buscarEstudiante(idEstudiante:Number){
  return this.http.post<EstudiantesDTO>(`${this.url}/buscarEstudiante`, {idEstudiante:idEstudiante});

}
}