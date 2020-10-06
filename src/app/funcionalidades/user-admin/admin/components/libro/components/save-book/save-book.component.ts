import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/models/book.model';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-save-book',
  templateUrl: './save-book.component.html',
  styleUrls: ['./save-book.component.css'],
})
export class SaveBookComponent implements OnInit {
  book: BookModel;

  constructor(private rest: AdminService, private router: Router) {
    this.book = new BookModel('', '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.book);
    if (
      this.book.author != '' &&
      this.book.title != '' &&
      this.book.edition != '' &&
      this.book.keyWords != '' &&
      this.book.themes != '' &&
      this.book.description != '' &&
      this.book.copies != '' &&
      this.book.avaible != ''
    ) {
      if (this.rest.isAdminLogged()) {
        this.rest.saveBook(this.book).subscribe((res: any) => {
          if (res.message) {
            alert(res.message);
          } else if (res.book) {
            alert('libro creado con el titulo: ' + this.book.title);
          } else {
            alert('Ha ocurrido un problema, intentalo más tarde');
          }
        });
      } else {
        alert('Usuario no autorizado');
        localStorage.clear();
        this.router.navigateByUrl('login');
      }
    } else {
      alert('Ingresa todos los datos para guardar un libro');
    }
  }
}
