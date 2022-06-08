import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

  usuariosList: any = [];

  constructor(private usuariosService: UsuariosService,
    private router: Router) { }

  ngOnInit(): void {
    this.GetAllItems();
  }

  edit(id: string) {
    this.router.navigate([`/Usuarios/editar/${id}`]);
  }

  delete(id: number) {
    this.usuariosService.Delete(id).subscribe(
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
    this.usuariosService.getAll().subscribe(
      operationResult => {
        /*if (operationResult.ResponseCode === 200) {*/
          this.usuariosList = operationResult;
        /*}*/
      },
      error => {}
    );
  }

}
