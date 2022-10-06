import { RecoverPasswordComponent } from './shared/components/recover-password/recover-password.component';
import { ErroComponent } from './components/erro/erro.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'}, //Full - rota principal
  {
    //Lazy Loading, somente carrega os componetes do modulo ao ser requisitado
    path: 'salesman',
    loadChildren: () => import('./components/salesman/salesman.module').then(m => m.SalesmanModule)
  },
  {path: 'recover', component: RecoverPasswordComponent},
  {path: 'erro', component: ErroComponent},
  {path: '**', redirectTo: 'erro'}, // Rota coringa, qualquer rota inexistente é capturada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
