import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { AppService } from '../app.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private apiService : AppService) { }

  getAll(): Observable <any> | undefined {
    const Filters = new Array<number>();
    return this.apiService.Get('Usuario', Filters);
  }

  getById(id): Observable <any> | undefined {
    const Filters = new Array<number>();
    return this.apiService.Get(`GetUsuarioById/${id}`, Filters);
  }

  Save(edit: boolean, ObjectValue: any): Observable<any> {
    if(edit === false) {
      return this.apiService.Post('Usuario', ObjectValue).pipe(
        catchError(this.handleError)
      );
    }
    return this.apiService.Put('Usuario', ObjectValue).pipe(
      catchError(this.handleError)
    );
  }

  Delete(ObjectDelete: any): Observable<any> {
    const object: any = ObjectDelete;
    return this.apiService.Delete(`Usuario/delete/${ObjectDelete}`, object).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
