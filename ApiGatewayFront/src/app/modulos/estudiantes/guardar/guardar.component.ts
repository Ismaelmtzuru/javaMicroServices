import { Component } from '@angular/core';
import { EstudiantesService } from '../servicio/estudiantes.service';
import { Router } from '@angular/router';
import { Estudiantes } from 'src/app/modelos/Estudiantes';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {

  constructor(private servicio:EstudiantesService,private routes:Router,private toastr:ToastrService){}
  estudiante:Estudiantes= new Estudiantes(); 
  guardarEstudiante(){
    this.servicio.agregarEstudiante(this.estudiante).subscribe({
      next:(data)=>{
        this.toastr.success("Estudiante dado de alta");
        this.routes.navigate(['estudiantes-listar']);

      },
      // En tu componente Angular
      error: (err) => {
        if (err.status === 400) {
          this.toastr.error("ID duplicado");
        } else if (err.status === 406) {
          this.toastr.error("El nombre ya existe"); // <--- Caso nuevo
        } else if (err.status === 404) {
          this.toastr.error("Escuela no válida");
        } 
      }
    });
  }


  regresar(){
    this.routes.navigate(['estudiantes-listar']);
  }


}
