import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EscuelasService } from '../servicios/escuelas.service';
import { Escuelas } from 'src/app/modelos/Escuelas';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  constructor(private servicio:EscuelasService,private routes:Router){  }
  claveBuscada: string = "";
  escuelaEncontrada: Escuelas | null = null;
  utlimaClaveBuscada: string = "";
  busquedaRealizada: boolean = false;

buscarEscuela() {
  this.servicio.buscarEscuelaClave(this.claveBuscada).subscribe({
    next: (data) => {
      this.escuelaEncontrada = data;
      this.utlimaClaveBuscada = this.claveBuscada;
      this.busquedaRealizada = true;
    },
    error: (err) => {
      console.error("Error al conectar con el Gateway", err);
      this.escuelaEncontrada = null;
      this.utlimaClaveBuscada = this.claveBuscada;
      this.busquedaRealizada = true;
    }
  });
}

  regresar(){
    this.routes.navigate(["escuelas-listar"]);
  }
}
