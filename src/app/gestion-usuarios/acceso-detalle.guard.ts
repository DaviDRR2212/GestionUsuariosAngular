import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from './services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AccesoDetalleGuard implements CanActivate {
  
  constructor(private userSrv:UsuariosService,
    private router:Router){

  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userSrv.usuarios.length <= 0){
      this.volverListado();
    }
    return this.userSrv.usuarios.length > 0;
  }
  
  volverListado () {
    this.router.navigateByUrl('');
  }
}
