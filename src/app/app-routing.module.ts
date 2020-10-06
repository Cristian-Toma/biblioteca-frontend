import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './funcionalidades/user-admin/admin/components/admin-home/admin-home.component';
import { InicioComponent } from './funcionalidades/inicio/components/inicio/inicio.component';
import { HomeComponent } from './funcionalidades/user-admin/users/components/home/home.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
