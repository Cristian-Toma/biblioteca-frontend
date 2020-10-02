import { NgModule } from '@angular/core';
import { AdminHomeComponent } from '../admin/components/admin-home/admin-home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeBookComponent } from './components/libro/components/home-book/home-book.component';
import { HomeMagazineComponent } from './components/revista/components/home-magazine/home-magazine.component';
import { HomeUserComponent } from './components/usuario/components/home-user/home-user.component';
import { SaveBookComponent } from './components/libro/components/save-book/save-book.component';
import { DeleteBookComponent } from './components/libro/components/delete-book/delete-book.component';
import { ListBookComponent } from './components/libro/components/list-book/list-book.component';
import { UpdateBookComponent } from './components/libro/components/update-book/update-book.component';
import { SearchBookComponent } from './components/libro/components/search-book/search-book.component';
import { SaveMagazineComponent } from './components/revista/components/save-magazine/save-magazine.component';
import { UpdateMagazineComponent } from './components/revista/components/update-magazine/update-magazine.component';
import { DeleteMagazineComponent } from './components/revista/components/delete-magazine/delete-magazine.component';
import { ListMagazineComponent } from './components/revista/components/list-magazine/list-magazine.component';
import { SearchMagazineComponent } from './components/revista/components/search-magazine/search-magazine.component';
import { SaveUserComponent } from './components/usuario/components/save-user/save-user.component';
import { UpdateUserComponent } from './components/usuario/components/update-user/update-user.component';
import { DeleteUserComponent } from './components/usuario/components/delete-user/delete-user.component';
import { ListUserComponent } from './components/usuario/components/list-user/list-user.component';
import { SearchUserComponent } from './components/usuario/components/search-user/search-user.component';

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
  { path: 'searchUser', component: SearchUserComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule { }
