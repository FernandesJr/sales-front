import { NgxMaskModule } from 'ngx-mask';
import { AppMaterialModule } from './../../shared/app-material/app-material/app-material.module';
import { SalesmanComponent } from './salesman.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesmanRoutingModule } from './salesman-routing.module';
import { SaleComponent } from './sale/sale.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    SalesmanComponent,
    SaleComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SalesmanRoutingModule,
    AppMaterialModule,
    NgxMaskModule.forChild()
  ]
})
export class SalesmanModule { }
