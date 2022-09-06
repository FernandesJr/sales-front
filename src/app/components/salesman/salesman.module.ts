import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AppMaterialModule } from './../../shared/app-material/app-material/app-material.module';
import { SalesmanComponent } from './salesman.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesmanRoutingModule } from './salesman-routing.module';
import { SaleComponent } from './sale/sale.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/*alterando A MOEDA default*/
import {LOCALE_ID, DEFAULT_CURRENCY_CODE} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt');
/*alterando A MOEDA default*/

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
    NgxMaskModule.forChild(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    /*alterando A MOEDA default*/
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ]
})
export class SalesmanModule { }
