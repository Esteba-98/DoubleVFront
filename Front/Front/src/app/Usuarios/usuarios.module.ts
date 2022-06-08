import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListComponent } from './usuarios-list.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosCreateComponent } from './usuarios-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UsuariosListComponent, UsuariosCreateComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule
  ]
})
export class UsuariosModule { }
