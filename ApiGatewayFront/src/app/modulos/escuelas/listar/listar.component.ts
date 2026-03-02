import { Component, inject } from '@angular/core';
import { EscuelasService } from '../servicios/escuelas.service';
import { Escuelas } from 'src/app/modelos/Escuelas';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  constructor(private servicio:EscuelasService,private route:Router){  }

  toast = inject(ToastrService);
  escuelas:Escuelas[]=[]
  idEscuela:Number;
  escuela:Escuelas= new Escuelas();

  ngOnInit(){
    this.servicio.listarEscuelas().subscribe(data=>{
      this.escuelas= data;
    })
  }

  abrirBuscarEscuelaClaveComponente(){
    this.route.navigate(['escuelas-buscarClave'])
  }

  abrirAgregarEscuelaComponente(){
    this.route.navigate(["escuelas-guardar"])
  }

  abrirEditarEscuelaComponente(escuela:Escuelas){

    localStorage.setItem("idEscuela", escuela.idEscuela.toString());
    this.route.navigate(["escuelas-editar"])
  }

  eliminarEscuela(escuela:Escuelas){
    this.servicio.eliminarEscuela(escuela).subscribe({
      next:(data) => {
        this.toast.info("Escuela eliminada");
        this.ngOnInit();
      },
      error:(err) => {
        this.toast.error("Error al eliminar la escuela",err);
      }
    });
  }



}
