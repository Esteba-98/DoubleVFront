import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.css']
})
export class UsuariosCreateComponent implements OnInit {

  public mainObject: any = {};
  edit: boolean = false;

  constructor(private usuariosService: UsuariosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.params.id){
      this.edit = true;
      const id = this.route.snapshot.params.id;
      this.getUsers(id);
    }
  }

  getUsers(id: string): void {
    this.usuariosService.getById(id).subscribe(
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
    this.usuariosService.Save(this.edit, ObjectValue.value).subscribe(
        operationResult => {
          console.log(operationResult);
        },
        error => {
          console.log(error);
        }
      );
  }

}
