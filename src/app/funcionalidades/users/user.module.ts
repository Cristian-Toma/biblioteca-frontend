import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PrestarLibroComponent } from './components/libros/components/prestar-libro/prestar-libro.component';
import { DevolverLibroComponent } from './components/libros/components/devolver-libro/devolver-libro.component';
import { DevolverRevistaComponent } from './components/revistas/components/devolver-revista/devolver-revista.component';
import { PrestarRevistaComponent } from './components/revistas/components/prestar-revista/prestar-revista.component';
import { RevistasUserHomeComponent } from './components/revistas/components/revistas-user-home/revistas-user-home.component';
import { LibrosUserHomeComponent } from './components/libros/components/libros-user-home/libros-user-home.component';
import { BuscarLibrosComponent } from './components/libros/components/buscar-libros/buscar-libros.component';
import { BuscarRevistasComponent } from './components/revistas/components/buscar-revistas/buscar-revistas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    PrestarLibroComponent,
    DevolverLibroComponent,
    DevolverRevistaComponent,
    PrestarRevistaComponent,
    RevistasUserHomeComponent,
    LibrosUserHomeComponent,
    BuscarLibrosComponent,
    BuscarRevistasComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class UserModule {}
