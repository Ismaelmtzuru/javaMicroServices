import { Component } from '@angular/core';
import { CursosService } from '../servicios/cursos.service';
import { Router } from '@angular/router';
import { CursosDTO } from 'src/app/modelos/CursosDTO';
import { ToastrService } from 'ngx-toastr';
import { Cursos } from 'src/app/modelos/Cursos';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  constructor(private servicio:CursosService,private routes:Router,private toastr:ToastrService){};
  cursos:CursosDTO[];
  curso:Cursos;
  id:Number=0;
  ngOnInit(){
    this.servicio.listarCursos().subscribe({next:(data)=>{
      if(!data || (Array.isArray(data) && data.length===0)){
        this.toastr.warning("No hay datos registrados");
        console.log("registros enviados", data);
        this.cursos=[];
        return;
      }else{
        this.cursos=data;
      }
    },
    error:(err)=>{
      this.toastr.error("Error en servidor");
      console.log(err);
    }});}
  


  abrirBuscarIdEscuela(){
    this.routes.navigate(['cursos-buscar-id-escuela']);
  }

  AbrirAgregarCursos(){
    this.routes.navigate(['cursos-guardar']);
  }

  abrirEditarCursos(curso:Cursos){
    localStorage.setItem("idCurso",curso.idCurso.toString());
    this.routes.navigate(['cursos-editar']);
  }
    eliminarCurso(curso:CursosDTO){
    const confirmacion = confirm("Deseas eliminar este registro?");
    if(!confirmacion){
      return;
    }
    this.servicio.eliminarCurso(curso).subscribe({next:(data)=>{
      this.toastr.success("Curso eliminado correctamente");
      console.log("curso eliminado", data);
      this.ngOnInit();
    },
    error:(err)=>{
      if(err.status===400){
        this.toastr.error("ID escuela no está registrada");
        console.log(err);
        return;
      }
      this.toastr.error("Error en servidor");
      console.log(err);
    }
  })}


}
