import { Component } from '@angular/core';
import { CursosService } from '../servicios/cursos.service';
import { Router } from '@angular/router';
import { CursosDTO } from 'src/app/modelos/CursosDTO';

@Component({
  selector: 'app-buscar-id-escuela',
  templateUrl: './buscar-id-escuela.component.html',
  styleUrls: ['./buscar-id-escuela.component.css']
})
export class BuscarIdEscuelaComponent {



    constructor(private servicio:CursosService,private routes:Router){  }
    claveBuscada: number;
    cursoEncontrado: CursosDTO[] = [];
    utlimaClaveBuscada: number;
    busquedaRealizada: boolean = false;
  
  buscarCurso() {
    this.servicio.buscarCursoIdEscuela(this.claveBuscada).subscribe({
      next: (data) => {
        this.cursoEncontrado = data;
        this.utlimaClaveBuscada = this.claveBuscada;
        this.busquedaRealizada = true;
      },
      error: (err) => {
        console.error("Error al conectar con el Gateway", err);
        this.cursoEncontrado = [];
        this.utlimaClaveBuscada = this.claveBuscada;
        this.busquedaRealizada = true;
      }
    });
  }
  
    regresar(){
      this.routes.navigate(["cursos-listar"]);
    }
 }

