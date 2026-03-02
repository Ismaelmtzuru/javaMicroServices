import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApiGatewayFront';

  constructor(private  routes: Router){}
  ngOnInit(){
    this.abrirPaginaInicio();
  }
  abrirListarComponenteEscuelas(){
    this.routes.navigate(['escuelas-listar']);
  }

  abrirPaginaInicio(){
    this.routes.navigate(['inicio']);
  }

  abrirListarEstudiantes(){
    this.routes.navigate(['estudiantes-listar']);
  }

  abrirListarCursos(){
    this.routes.navigate(['cursos-listar']);
  }
}
