import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit, OnDestroy {

  usuarios:any[];
  subscripcion:Subscription;
  usuarios$:Observable<any[]>;
  constructor(private userSrv:UsuariosService) { }

  ngOnInit() {
     /* this.subscripcion =this.userSrv.obtenerUsuarios()
      .subscribe(data => {        
        this.usuarios = data;
      });  */
      //Opción erronea sin push
      //this.usuarios$ = this.userSrv.obtenerUsuarios();  
      this.subscripcion = this.userSrv.usuariosModificaciones.subscribe(data =>
        {
          this.usuarios$ = data;
        }
      );
      this.userSrv.obtenerUsuarios();
  }

  ngOnDestroy() {
    //this.subscripcion.unsubscribe();
    console.log('Se esta destuyendo el componente Lista-Usuarios');
    this.subscripcion.unsubscribe();
  }

}
