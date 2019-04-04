import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUsuariosRoutingModule } from './gestion-usuarios-routing.module';
import { WidgetModule } from '../widget/widget.module';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { UsuariosService } from './services/usuarios.service';
import { HomeUsuariosComponent } from './components/home-usuarios/home-usuarios.component';

@NgModule({
  declarations: [
    ListaUsuariosComponent, 
    DetalleUsuarioComponent, 
    HomeUsuariosComponent
  ],
  imports: [
    CommonModule,
    GestionUsuariosRoutingModule,
    WidgetModule
  ],
  providers:[UsuariosService],
  exports: []
})
export class GestionUsuariosModule { }
