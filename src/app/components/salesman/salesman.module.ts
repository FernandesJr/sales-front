import { AppMaterialModule } from './../../shared/app-material/app-material/app-material.module';
import { SalesmanComponent } from './salesman.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesmanRoutingModule } from './salesman-routing.module';


@NgModule({
  declarations: [
    SalesmanComponent
  ],
  imports: [
    CommonModule,
    SalesmanRoutingModule,
    AppMaterialModule
  ]
})
export class SalesmanModule { }
