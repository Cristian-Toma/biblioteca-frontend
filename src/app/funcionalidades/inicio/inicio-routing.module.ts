import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../inicio/components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { FogotPasswordComponent } from './components/fogot-password/fogot-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'forgotPassword', component: FogotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class InicioRoutingModule {}
