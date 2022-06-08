import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsListComponent } from './persons-list.component';
import { PersonsCreateComponent } from './persons-create.component';

const routes: Routes = [
  {
    path: 'personas',
    component: PersonsListComponent
  },
  {
    path: 'Persons/crear',
    component: PersonsCreateComponent
  },
  {
    path: 'Persons/editar/:id',
    component: PersonsCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class PersonsRoutingModule { }
