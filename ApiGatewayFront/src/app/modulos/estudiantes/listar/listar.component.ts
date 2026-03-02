import { Component, inject } from '@angular/core';
import { EstudiantesService } from '../servicio/estudiantes.service';
import { EstudiantesDTO } from 'src/app/modelos/EstudiantesDTO';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  constructor(private servicio: EstudiantesService, private routes:Router) {}
  toast = inject(ToastrService);
  estudiantes:EstudiantesDTO[]=[]
  estudiante:EstudiantesDTO=new EstudiantesDTO();
  idEstudiante:number;
  ngOnInit(){
    this.servicio.listarTodosEstudiantes().subscribe({next:(data)=>{
      this.estudiantes=data;
    },
    error:(err=>{
      console.log(err);
    })}
  )
  }

    abrirAgregarEstudiante(){
      this.routes.navigate(['estudiantes-guardar']);
    }

    abrirEditarEstudiante(estudiante:EstudiantesDTO){
      localStorage.setItem("idEstudiante",estudiante.idEstudiante.toString());
      this.routes.navigate(['estudiantes-editar']);
    }

    eliminarEstudiante(estudiante:EstudiantesDTO){
      const confirmacion = confirm("¿Estás seguro de eliminar este estudiante?");
      if (confirmacion) {
        this.servicio.eliminarEstudiante(estudiante).subscribe({
          next: (data) => {
            this.toast.success("Estudiante eliminado correctamente");
            this.ngOnInit();
          },
          error: (err) => {
            console.log(err);
            this.toast.error("Error al eliminar el estudiante");
          }
        });
      }
    }
}
