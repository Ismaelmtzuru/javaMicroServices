
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarIdEscuelaComponent } from './modulos/cursos/buscar-id-escuela/buscar-id-escuela.component';
import{ ListarComponent as ListarEstudiantesComponent }from './modulos/estudiantes/listar/listar.component';
import{GuardarComponent as GuardarEstudiantesComponent} from './modulos/estudiantes/guardar/guardar.component';
import { ListarComponent as CursosListarComponent } from './modulos/cursos/listar/listar.component';
import { ListarComponent as EscuelasListarComponent } from './modulos/escuelas/listar/listar.component';
import { GuardarComponent as EscuelasGuardarComponent } from './modulos/escuelas/guardar/guardar.component';
import { GuardarComponent as CursosGuardarComponent } from './modulos/cursos/guardar/guardar.component';
import {BuscarComponent as BuscarClaveComponent} from './modulos/escuelas/buscar/buscar.component';
import { InicioComponent } from './modulos/inicio/inicio.component';
import { EditarComponent as EscuelasEditarComponent} from './modulos/escuelas/editar/editar.component';
import { EditarComponent as CursosEditarComponent} from './modulos/cursos/editar/editar.component';
import { EditarComponent as EstudiantesEditarComponent} from './modulos/estudiantes/editar/editar.component';



const routes: Routes = [
  {path:'estudiantes-listar',component:ListarEstudiantesComponent},
  {path:'estudiantes-guardar',component:GuardarEstudiantesComponent},
  {path:'cursos-buscar-id-escuela',component:BuscarIdEscuelaComponent},
  {path:'cursos-guardar',component:CursosGuardarComponent},
  {path:'cursos-listar',component:CursosListarComponent},
  {path:'escuelas-listar',component:EscuelasListarComponent},
  {path:'escuelas-guardar',component:EscuelasGuardarComponent},
  {path:'inicio',component:InicioComponent},
  {path:'escuelas-buscarClave',component:BuscarClaveComponent},
  {path:'escuelas-editar',component:EscuelasEditarComponent},
  {path:'estudiantes-editar',component:EstudiantesEditarComponent},
  {path:'cursos-editar',component:CursosEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
