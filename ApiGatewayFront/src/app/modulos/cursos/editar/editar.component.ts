import { Component, inject, Injectable } from '@angular/core';
import { Cursos } from 'src/app/modelos/Cursos';
import { CursosService } from '../servicios/cursos.service';
import { ToastrService } from 'ngx-toastr';
import { CursosDTO } from 'src/app/modelos/CursosDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  cursoEditar:CursosDTO = new CursosDTO();
  cursoId:Number=0;
  idCurso:Number;
  curso:CursosDTO;

  constructor(private servicio:CursosService, private route:Router){}
  toast = inject(ToastrService);
  ngOnInit(){
    let id = localStorage.getItem("idCurso");
    if(id){
      this.idCurso = Number(id);
    }

    console.log("idCurso recibido", this.idCurso);
    this.servicio.buscarCurso(this.idCurso).subscribe({next:(data)=>{
      this.cursoEditar=data;
      console.log("curso recibido", this.cursoEditar);
    },
    error:(err)=>{
      this.toast.error("Error en servidor");
      console.log(err);
    }
  });}


  guardarCurso(){
    this.servicio.editarCurso(this.cursoEditar).subscribe({next:(data)=>{
      this.toast.success("Curso editado correctamente");
      console.log("curso editado", data);
      this.route.navigate(['/cursos-listar']);
    },
    error:(err)=>{
      if(err.status===400){
        this.toast.error("ID escuela no está registrada");
        console.log(err);
        return;
      }
      this.toast.error("Error en servidor");
      console.log(err);
    }
  })}


}
