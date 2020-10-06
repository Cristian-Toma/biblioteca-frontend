import { NgModule } from '@angular/core';
import { AdminHomeComponent } from '../user-admin/admin/components/admin-home/admin-home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeBookComponent } from './admin/components/libro/components/home-book/home-book.component';
import { HomeMagazineComponent } from './admin/components/revista/components/home-magazine/home-magazine.component';
import { HomeUserComponent } from './admin/components/usuario/components/home-user/home-user.component';
import { SaveBookComponent } from './admin/components/libro/components/save-book/save-book.component';
import { DeleteBookComponent } from './admin/components/libro/components/delete-book/delete-book.component';
import { ListBookComponent } from './admin/components/libro/components/list-book/list-book.component';
import { UpdateBookComponent } from './admin/components/libro/components/update-book/update-book.component';
import { SearchBookComponent } from './admin/components/libro/components/search-book/search-book.component';
import { SaveMagazineComponent } from './admin/components/revista/components/save-magazine/save-magazine.component';
import { UpdateMagazineComponent } from './admin/components/revista/components/update-magazine/update-magazine.component';
import { DeleteMagazineComponent } from './admin/components/revista/components/delete-magazine/delete-magazine.component';
import { ListMagazineComponent } from './admin/components/revista/components/list-magazine/list-magazine.component';
import { SearchMagazineComponent } from './admin/components/revista/components/search-magazine/search-magazine.component';
import { SaveUserComponent } from './admin/components/usuario/components/save-user/save-user.component';
import { UpdateUserComponent } from './admin/components/usuario/components/update-user/update-user.component';
import { DeleteUserComponent } from './admin/components/usuario/components/delete-user/delete-user.component';
import { ListUserComponent } from './admin/components/usuario/components/list-user/list-user.component';
import { SearchUserComponent } from './admin/components/usuario/components/search-user/search-user.component';
import { BuscarLibrosComponent } from './users/components/libros/components/buscar-libros/buscar-libros.component';
import { DevolverLibroComponent } from './users/components/libros/components/devolver-libro/devolver-libro.component';
import { LibrosUserHomeComponent } from './users/components/libros/components/libros-user-home/libros-user-home.component';
import { PrestarLibroComponent } from './users/components/libros/components/prestar-libro/prestar-libro.component';
import { RevistasUserHomeComponent } from './users/components/revistas/components/revistas-user-home/revistas-user-home.component';
import { PrestarRevistaComponent } from './users/components/revistas/components/prestar-revista/prestar-revista.component';
import { DevolverRevistaComponent } from './users/components/revistas/components/devolver-revista/devolver-revista.component';
import { BuscarRevistasComponent } from './users/components/revistas/components/buscar-revistas/buscar-revistas.component';

const routes: Routes = [
  { path: 'adminHome', component: AdminHomeComponent },

  //rutas para admin de libros
  { path: 'librosHome', component: HomeBookComponent },
  { path: 'saveBook', component: SaveBookComponent },
  { path: 'updateBook', component: UpdateBookComponent },
  { path: 'deleteBook', component: DeleteBookComponent },
  { path: 'listBooks', component: ListBookComponent },

  //rutas para admin de revistas
  { path: 'searchBook', component: SearchBookComponent },
  { path: 'revistasHome', component: HomeMagazineComponent },
  { path: 'saveMagazine', component: SaveMagazineComponent },
  { path: 'updateMagazine', component: UpdateMagazineComponent },
  { path: 'deleteMagazine', component: DeleteMagazineComponent },
  { path: 'listMagazine', component: ListMagazineComponent },
  { path: 'searchMagazine', component: SearchMagazineComponent },

  //rutas para admin de usuarios
  { path: 'userHome', component: HomeUserComponent },
  { path: 'saveUser', component: SaveUserComponent },
  { path: 'updateUser', component: UpdateUserComponent },
  { path: 'deleteUser', component: DeleteUserComponent },
  { path: 'listUser', component: ListUserComponent },
  { path: 'searchUser', component: SearchUserComponent },

  { path: 'homeBook', component: LibrosUserHomeComponent },
  { path: 'prestaLibro', component: PrestarLibroComponent },
  { path: 'devolverLibro', component: DevolverLibroComponent },
  { path: 'buscarLibro', component: BuscarLibrosComponent },

  { path: 'homeRevista', component: RevistasUserHomeComponent },
  { path: 'prestarRevista', component: PrestarRevistaComponent },
  { path: 'devolverRevista', component: DevolverRevistaComponent },
  { path: 'buscarRevista', component: BuscarRevistasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
