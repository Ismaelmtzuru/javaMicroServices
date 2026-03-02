import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { CursosService } from '../servicios/cursos.service';
import { CursosDTO } from 'src/app/modelos/CursosDTO';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {

  constructor(private router:Router,private toast:ToastrService,private servicio:CursosService){}

  cursosGuardar:CursosDTO= new CursosDTO();
  guardarCursos(){
    console.log("Datos a guardar", this.cursosGuardar);
    this.servicio.guardarCurso(this.cursosGuardar).subscribe({
      next:(data)=>{
        this.toast.success("Curso Guardado con éxito");
        this.router.navigate(['cursos-listar']);
    },  error:(e)=>{
      if(e.status === 404){
        this.toast.error("ID de escuela no está registrado", "Error");
      }else{
      this.toast.error("Error al guardar el curso", "Error");
      }
  } 
    });
  }

  regresar(){
    this.router.navigate(['cursos-listar']);
  }

}
 