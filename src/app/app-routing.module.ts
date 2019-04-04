import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { AccesoDetalleGuard } from './gestion-usuarios/acceso-detalle.guard';

const routes: Routes = [
  /* { path: 'usuarios/:userid', 
    component: DetalleUsuarioComponent,
    canActivate: [AccesoDetalleGuard]  
  }, */
  /* {path: '', component: ListaUsuariosComponent},
  { path: 'usuarios',
    children: [
      {
        path:':userid',
        component: DetalleUsuarioComponent
      }
    ],
    canActivate: [AccesoDetalleGuard]  
  },
  {path: '**', component:ErrorComponent} */
  { path: 'usuarios', loadChildren:'./gestion-usuarios/gestion-usuarios.module#GestionUsuariosModule' },
  { path: '', redirectTo:'usuarios/lista', pathMatch:'full'},
  { path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
