import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';
import { GlobalServiceService } from 'src/Shared/global-service.service';
import { Stock } from 'src/app/Model/stock';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  public stock: Stock[] | any;
  public columnDefs: ColDef[];

  // gridApi and columnApi
  private api: GridApi | any;
  private columnApi: ColumnApi | any;
  constructor(private sharedService: GlobalServiceService, private toastr: ToastrService ) {
    this.columnDefs = this.createColumnDefs();
  }

  ngOnInit() {
    this.sharedService.get('Stock','').subscribe(
      data => {
        this.stock = data
      }
    )
  }

  // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
  onGridReady(params: { api: any; columnApi: ColumnApi; }): void {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.api.sizeColumnsToFit();
  }

  // create column definitions
  private createColumnDefs() {
    return [
      { headerName: 'Id Producto', field: 'idProducto', filter: true, enableSorting: true, editable: false, sortable: true },
      { headerName: 'Producto', field: 'producto', filter: true, editable: false, sortable: true },
      { headerName: 'Codigo', field: 'codigo', filter: true, sortable: true, editable: false},
      { headerName: 'Estado', field: 'estado', filter: true, editable: false, sortable: true },
      { headerName: 'Cantidad Disponible', field: 'cantidadDisponible', filter: true, editable: false }
    ]
  }

  status: any;

  //Update user
  editUser() {
debugger;
   const d=this.api.getEditingCells();

    if (this.api.getSelectedRows().length == 0) {
      this.toastr.error("error", "Please select a User for update");
      return;
    }
    var row = this.api.getSelectedRows();

    // this.userService.updateUser(row[0]).subscribe(data => {
    //   this.toastr.success("success",data);
    //   this.ngOnInit();
    //   });
  }

  //Delete user
  deleteUser() {
    debugger;
    var selectedRows = this.api.getSelectedRows();

    if (selectedRows.length == 0) {
      this.toastr.error("error", "Please select a User for deletion");
      return;
    }
    // this.userService.deleteUser(selectedRows[0].UserId).subscribe(data =>{
    //   this.toastr.success("success",data);
    //   this.ngOnInit();
    //   this.api.refreshRows(null);
    // });
  }

  Add()
  {
    // this.router.navigate(['addUser']);
  }

}
