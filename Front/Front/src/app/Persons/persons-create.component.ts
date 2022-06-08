import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persons-create',
  templateUrl: './persons-create.component.html',
  styleUrls: ['./persons-create.component.css']
})
export class PersonsCreateComponent implements OnInit {

  public mainObject: any = {};
  edit: boolean = false;

  constructor(private personsService: PersonsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.params.id){
      this.edit = true;
      const id = this.route.snapshot.params.id;
      this.getPersons(id);
    }
  }

  getPersons(id: string): void {
    this.personsService.getById(id).subscribe(
      operationResult => {
        /*if (operationResult.ResponseCode === 200) {*/
          this.mainObject = operationResult;
        /*}*/
      },
      error => {}
    );
  }

  saveElement(ObjectValue: any) {
    ObjectValue.value.id = this.mainObject['id'];
    this.personsService.Save(this.edit, ObjectValue.value).subscribe(
        operationResult => {
          console.log(operationResult);
        },
        error => {
          console.log(error);
        }
      );
  }

}
