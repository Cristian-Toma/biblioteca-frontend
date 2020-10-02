import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { InicioComponent } from '../inicio/components/inicio/inicio.component';
import { InicioRoutingModule } from '../inicio/inicio-routing.module';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { HomeBookComponent } from './components/libro/components/home-book/home-book.component';
import { SaveBookComponent } from './components/libro/components/save-book/save-book.component';
import { UpdateBookComponent } from './components/libro/components/update-book/update-book.component';
import { DeleteBookComponent } from './components/libro/components/delete-book/delete-book.component';
import { HomeMagazineComponent } from './components/revista/components/home-magazine/home-magazine.component';
import { HomeUserComponent } from './components/usuario/components/home-user/home-user.component';
import { SearchBookComponent } from './components/libro/components/search-book/search-book.component';
import { SearchMagazineComponent } from './components/revista/components/search-magazine/search-magazine.component';
import { BrowserModule } from '@angular/platform-browser';
import { SaveUserComponent } from './components/usuario/components/save-user/save-user.component';
import { UpdateMagazineComponent } from './components/revista/components/update-magazine/update-magazine.component';
import { SaveMagazineComponent } from './components/revista/components/save-magazine/save-magazine.component';
import { DeleteMagazineComponent } from './components/revista/components/delete-magazine/delete-magazine.component';
import { UpdateUserComponent } from './components/usuario/components/update-user/update-user.component';
import { DeleteUserComponent } from './components/usuario/components/delete-user/delete-user.component';
import { ListUserComponent } from './components/usuario/components/list-user/list-user.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { SearchUserComponent } from './components/usuario/components/search-user/search-user.component';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ListBookComponent } from './components/libro/components/list-book/list-book.component';

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
