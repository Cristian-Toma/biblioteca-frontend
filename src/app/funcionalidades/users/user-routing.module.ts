import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibrosUserHomeComponent } from './components/libros/components/libros-user-home/libros-user-home.component';
import { PrestarLibroComponent } from './components/libros/components/prestar-libro/prestar-libro.component';
import { DevolverLibroComponent } from './components/libros/components/devolver-libro/devolver-libro.component';
import { BuscarLibrosComponent } from './components/libros/components/buscar-libros/buscar-libros.component';
import { RevistasUserHomeComponent } from './components/revistas/components/revistas-user-home/revistas-user-home.component';
import { PrestarRevistaComponent } from './components/revistas/components/prestar-revista/prestar-revista.component';
import { DevolverRevistaComponent } from './components/revistas/components/devolver-revista/devolver-revista.component';
import { BuscarRevistasComponent } from './components/revistas/components/buscar-revistas/buscar-revistas.component';

const routes: Routes = [
  { path: 'homeBook', component: LibrosUserHomeComponent },
  { path: 'prestaLibro', component: PrestarLibroComponent },
  { path: 'devolverLibro', component: DevolverLibroComponent },
  { path: 'buscarLibro', component: BuscarLibrosComponent },

  { path: 'homeRevista', component: RevistasUserHomeComponent },
  { path: 'prestaRevista', component: PrestarRevistaComponent },
  { path: 'devolverRevista', component: DevolverRevistaComponent },
  { path: 'buscarRevista', component: BuscarRevistasComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
