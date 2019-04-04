import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { PersistService } from 'src/app/servicios-core/services/persist.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: any[] = [];
  usuariosModificaciones:Subject<Observable<any[]>> = new Subject<Observable<any[]>>();
  idUsuariosBorrados:number[] = [];

  constructor(private httpSrv:HttpClient, private persistSrv:PersistService) {
    this.httpSrv.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => {
        this.usuarios = users;
        persistSrv.saveData('users', this.usuarios);
        //this.usuariosModificaciones.next([...this.usuarios]);
        this.obtenerUsuarios();
      });
  }

  //api
  obtenerUsuarios() {
    //return of([...this.usuarios]);
    this.usuariosModificaciones.next(of([...this.usuarios]));
  }

  cargarListadoUsuarios():any[] {
    return this.usuarios.filter((user) => {
      return 
    });
  }

  obtenerUsuario(id:number):Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        let usuarioBuscado = this.usuarios.filter((user) => {
          return user.id === id;
        })[0];
        resolve(usuarioBuscado);
      } catch (error) {
        reject(error);
      }
    });
  }

  borrarUsuarioA(id:number) {
    this.idUsuariosBorrados.push(id);
  }

  borrarUsuario(id:number):Promise<boolean> {
    this.idUsuariosBorrados.push(id);
    return new Promise((resolve,reject) => {
      try {
        const users = this.usuarios.filter((users) => {
          return users.id !== id;
        });
        this.usuarios = users;
        resolve(true);
      } catch (error) {
        reject (error);
      }
    });
  }
}
