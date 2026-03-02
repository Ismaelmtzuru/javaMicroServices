import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// Inicio
import { InicioComponent } from './modulos/inicio/inicio.component';

// Estudiantes
import { ListarComponent as ListarEstudiantesComponent } from './modulos/estudiantes/listar/listar.component';
import { GuardarComponent as GuardarEstudiantesComponent } from './modulos/estudiantes/guardar/guardar.component';
import { EditarComponent as EstudiantesEditarComponent} from './modulos/estudiantes/editar/editar.component';

// Cursos
import { ListarComponent as CursosListarComponent } from './modulos/cursos/listar/listar.component';
import { GuardarComponent as CursosGuardarComponent } from './modulos/cursos/guardar/guardar.component';
import { BuscarIdEscuelaComponent } from './modulos/cursos/buscar-id-escuela/buscar-id-escuela.component';
import { EditarComponent as CursosEditarComponent} from './modulos/cursos/editar/editar.component';


// Escuelas
import { ListarComponent as EscuelasListarComponent } from './modulos/escuelas/listar/listar.component';
import { GuardarComponent as EscuelasGuardarComponent } from './modulos/escuelas/guardar/guardar.component';
import { BuscarComponent } from './modulos/escuelas/buscar/buscar.component';
import { EditarComponent as EscuelasEditarComponent} from './modulos/escuelas/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    // Estudiantes
    ListarEstudiantesComponent,
    GuardarEstudiantesComponent,
    // Cursos
    CursosListarComponent,
    CursosGuardarComponent,
    BuscarIdEscuelaComponent,
    // Escuelas
    EscuelasListarComponent,
    EscuelasGuardarComponent,
    BuscarComponent,
    EscuelasEditarComponent,
    EstudiantesEditarComponent,
    CursosEditarComponent,

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 4000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
