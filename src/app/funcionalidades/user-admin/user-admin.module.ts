import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { InicioComponent } from '../inicio/components/inicio/inicio.component';
import { InicioRoutingModule } from '../inicio/inicio-routing.module';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { HomeBookComponent } from './admin/components/libro/components/home-book/home-book.component';
import { SaveBookComponent } from './admin/components/libro/components/save-book/save-book.component';
import { UpdateBookComponent } from './admin/components/libro/components/update-book/update-book.component';
import { DeleteBookComponent } from './admin/components/libro/components/delete-book/delete-book.component';
import { HomeMagazineComponent } from './admin/components/revista/components/home-magazine/home-magazine.component';
import { HomeUserComponent } from './admin/components/usuario/components/home-user/home-user.component';
import { SearchBookComponent } from './admin/components/libro/components/search-book/search-book.component';
import { SearchMagazineComponent } from './admin/components/revista/components/search-magazine/search-magazine.component';
import { BrowserModule } from '@angular/platform-browser';
import { SaveUserComponent } from './admin/components/usuario/components/save-user/save-user.component';
import { UpdateMagazineComponent } from './admin/components/revista/components/update-magazine/update-magazine.component';
import { SaveMagazineComponent } from './admin/components/revista/components/save-magazine/save-magazine.component';
import { DeleteMagazineComponent } from './admin/components/revista/components/delete-magazine/delete-magazine.component';
import { UpdateUserComponent } from './admin/components/usuario/components/update-user/update-user.component';
import { DeleteUserComponent } from './admin/components/usuario/components/delete-user/delete-user.component';
import { ListUserComponent } from './admin/components/usuario/components/list-user/list-user.component';
import { NavbarAdminComponent } from './admin/components/navbar-admin/navbar-admin.component';
import { SearchUserComponent } from './admin/components/usuario/components/search-user/search-user.component';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ListBookComponent } from './admin/components/libro/components/list-book/list-book.component';
import { ListMagazineComponent } from './admin/components/revista/components/list-magazine/list-magazine.component';
import { BuscarLibrosComponent } from './users/components/libros/components/buscar-libros/buscar-libros.component';
import { DevolverLibroComponent } from './users/components/libros/components/devolver-libro/devolver-libro.component';
import { LibrosUserHomeComponent } from './users/components/libros/components/libros-user-home/libros-user-home.component';
import { PrestarLibroComponent } from './users/components/libros/components/prestar-libro/prestar-libro.component';
import { HomeComponent } from './users/components/home/home.component';
import { BuscarRevistasComponent } from './users/components/revistas/components/buscar-revistas/buscar-revistas.component';
import { DevolverRevistaComponent } from './users/components/revistas/components/devolver-revista/devolver-revista.component';
import { PrestarRevistaComponent } from './users/components/revistas/components/prestar-revista/prestar-revista.component';
import { RevistasUserHomeComponent } from './users/components/revistas/components/revistas-user-home/revistas-user-home.component';

@NgModule({
  declarations: [
    SaveBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    SaveMagazineComponent,
    UpdateMagazineComponent,
    DeleteMagazineComponent,
    SaveMagazineComponent,
    SaveUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    ListUserComponent,
    SearchUserComponent,
    AdminHomeComponent,
    NavbarAdminComponent,
    HomeBookComponent,
    HomeMagazineComponent,
    ListBookComponent,
    ListMagazineComponent,
    HomeUserComponent,
    LibrosUserHomeComponent,
    PrestarLibroComponent,
    DevolverLibroComponent,
    BuscarLibrosComponent,
    HomeComponent,
    RevistasUserHomeComponent,
    PrestarRevistaComponent,
    DevolverRevistaComponent,
    BuscarRevistasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    InicioRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
  ],
  providers: [AdminService],
  exports: [],
})
export class AdminModule {}
