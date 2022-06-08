import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  personsList: any = [];

  constructor(private personsService: PersonsService,
    private router: Router) { }

  ngOnInit(): void {
    this.GetAllItems();
  }

  edit(id: string) {
    this.router.navigate([`/Persons/editar/${id}`]);
  }

  delete(id: number) {
    this.personsService.Delete(id).subscribe(
      operationResult => {
        /*if (operationResult.ResponseCode === 200) {*/
          console.log(operationResult);
          this.GetAllItems();
        /*}*/
      },
      error => {console.log(error);}
    );
  }

  GetAllItems(): void {
    this.personsService.getAll().subscribe(
      operationResult => {
        /*if (operationResult.ResponseCode === 200) {*/
          this.personsList = operationResult;
        /*}*/
      },
      error => {}
    );
  }

}
