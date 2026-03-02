import { Component } from '@angular/core';
import { EscuelasService } from '../servicios/escuelas.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Escuelas } from 'src/app/modelos/Escuelas';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {
  constructor(private servicio:EscuelasService,private routes:Router){}
  toastr= inject(ToastrService);

  escuela:Escuelas= new Escuelas();

guardarEscuela(){
  console.log(this.escuela);
  this.servicio.guardarEscuela(this.escuela).subscribe({
    next: (data) =>{
      this.toastr.success("Escuela registrada");
      this.routes.navigate(["escuelas-listar"]);
    },
    error: (err) =>{
      if(err.status===409){
        this.toastr.warning("ID ya está registrado, usar otro");
      }else if(err.status===400){
        this.toastr.warning("Clave ya registrada, usar otra");
      }
      console.error(err);
    }
  });
}

regresar(){
  this.routes.navigate(["escuelas-listar"]);
}

}
