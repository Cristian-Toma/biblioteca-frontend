import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { AboutComponent } from '../inicio/components/about/about.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule } from '../user-admin/user-admin-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FogotPasswordComponent } from './components/fogot-password/fogot-password.component';

@NgModule({
  declarations: [
    InicioComponent,
    LoginComponent,
    AboutComponent,
    FogotPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    InicioRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule,
    AppRoutingModule,
  ],
  exports: [InicioComponent, LoginComponent, AboutComponent],
})
export class InicioModule {}
