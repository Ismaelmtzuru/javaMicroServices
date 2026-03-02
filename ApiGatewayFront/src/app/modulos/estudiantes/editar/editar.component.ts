import { Component,inject } from '@angular/core';
import { EstudiantesService } from '../servicio/estudiantes.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EstudiantesDTO } from 'src/app/modelos/EstudiantesDTO';
import { Estudiantes } from 'src/app/modelos/Estudiantes';


@Component({
  selector: 'app-editar-estudiantes',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  constructor(private route:Router,private service:EstudiantesService){}
  toast = inject(ToastrService);
  idEstudiante:Number;
  estudianteEncontrado:EstudiantesDTO= new EstudiantesDTO();
  ngOnInit(){
    let idEstudiante = localStorage.getItem("idEstudiante");
    console.log(idEstudiante);
    this.service.buscarEstudiante(Number(idEstudiante)).subscribe({next:(data:EstudiantesDTO)=>{
      this.estudianteEncontrado = data;
    },error:(err)=>{
      this.toast.error("Error al cargar el estudiante");
  }});
  }



  editarEstudiante(){
    this.service.editarEstudiante(this.estudianteEncontrado).subscribe({
  next: (data) => {
    // Si entra aquí, es porque recibió el objeto (Status 200)
    this.toast.success("Estudiante actualizado" );
    this.route.navigate(['estudiantes-listar']);
  },
  error: (err) => {
    console.log(err.error)
    const mensaje = typeof err.error === 'string' ? err.error : 'Error al actualizar el estudiante';
    if(err.status === 400|| mensaje.includes("Escuela")){
      this.toast.error(mensaje,"Revisa ID Escuela");
    }else if(err.status === 500 || mensaje.includes("Nombre")){
      this.toast.error(mensaje, "Revisar nombre del estudiante");
    }else{
      this.toast.error("Error al actualizar el estudiante");
    }
  }
});
  }
}
  