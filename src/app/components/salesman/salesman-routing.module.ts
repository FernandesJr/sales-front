import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesmanComponent } from './salesman.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  {
    path: '', component: SalesmanComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'sale', component: SaleComponent},
      {path: 'saleshistory'},
      {path: 'configuration'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesmanRoutingModule { }
