import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockComponent } from './Stock/add-stock/add-stock.component';
import { StockComponent } from './Stock/stock/stock.component';

const routes: Routes = [
  {path:'Stock', component:StockComponent},
  {path:'AddStock', component:AddStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
