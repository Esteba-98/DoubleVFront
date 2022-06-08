import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosListComponent } from './usuarios-list.component';
import { UsuariosCreateComponent } from './usuarios-create.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosListComponent
  },
  {
    path: 'Usuarios/crear',
    component: UsuariosCreateComponent
  },
  {
    path: 'Usuarios/editar/:id',
    component: UsuariosCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class UsuariosRoutingModule { }
