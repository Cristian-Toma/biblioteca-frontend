import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/models/book.model';
import { AdminService } from 'src/app/services/admin/admin.service';

type Book = {
  name: string;
};

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
})
export class ListBookComponent implements OnInit {
  constructor(private rest: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getBooks();
  }

  books: BookModel[] = [];

  getBooks() {
    if (this.rest.isAdminLogged()) {
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
