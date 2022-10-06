import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { AppMaterialModule } from './shared/app-material/app-material/app-material.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErroComponent } from './components/erro/erro.component';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { SettingsComponent } from './shared/components/settings/settings.component';
import { RecoverPasswordComponent } from './shared/components/recover-password/recover-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    ErroComponent,
    SettingsComponent,
    RecoverPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(), //Nos modulos filhos também precisa importar como forChild
    ToastrModule.forRoot({ //Configurações Globais, porém, pode ser alterado em cada toastr
      closeButton: true,
      timeOut: 7000,
      progressBar: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
