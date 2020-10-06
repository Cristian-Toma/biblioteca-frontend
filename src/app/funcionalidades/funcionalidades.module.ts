import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioModule } from './inicio/inicio.module';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './user-admin/user-admin.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, InicioModule, AdminModule, FormsModule],
  exports: [],
})
export class FuncionalidadesModule {}
