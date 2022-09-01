import { SalesmanComponent } from './salesman.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: SalesmanComponent,
    children: [
      {path: 'sales'},
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
