import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { AccesoDetalleGuard } from './acceso-detalle.guard';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { HomeUsuariosComponent } from './components/home-usuarios/home-usuarios.component';

const routes: Routes = [  
  { 
    path: '', 
    component: HomeUsuariosComponent,
    children: [
      { 
        path: 'lista',
        component: ListaUsuariosComponent
      },
      { 
        path: ':userid',
        component: DetalleUsuarioComponent,        
        canActivate: [AccesoDetalleGuard]  
      } 
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUsuariosRoutingModule { }
