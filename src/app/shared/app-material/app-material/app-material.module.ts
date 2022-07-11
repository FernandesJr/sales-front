import { NgModule } from '@angular/core';

//Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }
