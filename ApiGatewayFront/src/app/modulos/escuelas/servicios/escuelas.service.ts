import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Escuelas } from 'src/app/modelos/Escuelas';
import { environmnent } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EscuelasService {
  private url = `${environmnent.gatewayUrl}/escuelas`;

  constructor(private http: HttpClient,private routes :Router) { }

  listarEscuelas(){
    return this.http.get<Escuelas[]>(`${this.url}`);
  }


  guardarEscuela(escuela:Escuelas){
    return this.http.post<Escuelas>(`${this.url}`, escuela);
  }


  buscarEscuelaClave(clave:String){
    return this.http.get<Escuelas>(`${this.url}/${clave}`);
  }

  eliminarEscuela(escuela:Escuelas){
    return this.http.post(`${this.url}/eliminarEscuela`, escuela, { responseType: 'text' });
  }

  editarEscuela(escuela:Escuelas){
    return this.http.put(`${this.url}/editarEscuela`, escuela);
  }

  buscarEscuelaId(escuela:Escuelas){
    return this.http.post<Escuelas>(`${this.url}/buscarEscuelaId`, escuela);
  }

}
