import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/models/book.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-buscar-libros',
  templateUrl: './buscar-libros.component.html',
  styleUrls: ['./buscar-libros.component.css'],
})
export class BuscarLibrosComponent implements OnInit {
  constructor(private rest: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getBooks();
  }

  books: BookModel[] = [];

  getBooks() {
    if (this.rest.isUserLogged()) {
      this.rest.getBooks().subscribe((res: any) => {
        res.data.map((book) => this.books.push(book));
      });
    } else {
      alert('Usuario No Autorizado');
      localStorage.clear();
      this.router.navigateByUrl('login');
    }
  }
}
