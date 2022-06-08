import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsListComponent } from './persons-list.component';
import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsCreateComponent } from './persons-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PersonsListComponent, PersonsCreateComponent],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    FormsModule
  ]
})
export class PersonsModule { }
