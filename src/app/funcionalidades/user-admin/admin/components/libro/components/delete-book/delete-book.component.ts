import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css'],
})
export class DeleteBookComponent implements OnInit {
  constructor(private rest: AdminService, private router: Router) {}

  ngOnInit(): void {}

  _id: string = '';

  delete() {
    if (this.rest.isAdminLogged()) {
      this.rest.deleteBook(this._id).subscribe((res: any) => {
        if (res.book === true) {
          alert('Libro eliminado');
        }
      });
    } else {
      alert('Usuario No Autorizado');
      localStorage.clear();
      this.router.navigateByUrl('login');
    }
  }
}
