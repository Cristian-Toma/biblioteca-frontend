import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './funcionalidades/admin/components/admin-home/admin-home.component';
import { InicioComponent } from './funcionalidades/inicio/components/inicio/inicio.component';
import { LoginComponent } from './funcionalidades/inicio/components/login/login.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  {
    path: 'adminHome',
    component: AdminHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
