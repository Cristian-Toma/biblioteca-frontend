import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../inicio/components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { AdminHomeComponent } from '../admin/components/admin-home/admin-home.component';
import { HomeComponent } from '../users/components/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adminHome', component: AdminHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class InicioRoutingModule {}
