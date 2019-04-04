import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit, OnDestroy {

  constructor(private route:ActivatedRoute, 
                private router:Router,
                  private userSrv:UsuariosService) { }

  userid:number;
  usuario:any;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let idUsuario = params.get('userid');
      console.log(idUsuario);
      this.userSrv.obtenerUsuario(+idUsuario)
      .then(data => {
        this.usuario = data;
      })
      .catch( error => {
        console.log((`Ha habido un error ${error}`));     
      });
    });

    /* let userid = this.route.paramMap.pipe(
      switchMap(params => {
        let idUsuario = params.get('userid');
        console.log(idUsuario);
        return idUsuario;
      })
    ); */
  }

  ngOnDestroy () {    
    console.log('Se esta destuyendo el componente Detalle-Usuarios');
  }

  volverListado () {
    this.router.navigateByUrl('');
  }

  borrarUsuario(id:string){
    this.userSrv.borrarUsuario(+id)
    .then(data => {
      if( data === true) {
        this.volverListado();
      }
    }).catch (error =>{
      console.log((`Ha habido un error ${error}`));     
    });
  }

}
