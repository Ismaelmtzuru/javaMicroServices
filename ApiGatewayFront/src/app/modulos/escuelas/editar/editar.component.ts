import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Escuelas } from 'src/app/modelos/Escuelas';
import { EscuelasService } from '../servicios/escuelas.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-escuelas',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  constructor(private routes:Router,private servicio:EscuelasService){}
  toast = inject(ToastrService);
  idEscuela:Escuelas = new Escuelas();
  escuelaEncontrada:Escuelas = new Escuelas();
  ngOnInit(){
    
    
    let id = localStorage.getItem("idEscuela");
    if(id){
      this.idEscuela.idEscuela = Number(id);
    }
    this.idEscuela.idEscuela = Number(id)
    console.log(this.idEscuela);
    this.servicio.buscarEscuelaId(this.idEscuela).subscribe({
      next:(data) => {
        this.escuelaEncontrada = data;
        this.toast.info("Escuela encontrada");
      },
      error:(err) => {
        console.error('Error al buscar la escuela:', err);
      }
    });
  }


  editarEscuela(escuela:Escuelas){
    this.servicio.editarEscuela(this.escuelaEncontrada).subscribe({      next:(data) => {
        this.toast.success("Escuela editada exitosamente");
        this.routes.navigate(['escuelas-listar']);
      },
      error:(err) => {
        if(err.status === 400){
          this.toast.warning("Clave ya registrada, usar otra");
        }
      }
    });


  }
}
