import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent implements OnInit {
  constructor(private rest: AdminService, private router: Router) {}

  ngOnInit(): void {}

  _id: string = '';

  delete() {
    if (this.rest.isAdminLogged()) {
      this.rest.deleteUser(this._id).subscribe((res: any) => {
        if (res.user === true) {
          alert('usuario eliminado');
        }
      });
    } else {
      alert('Usuario No Autorizado');
      localStorage.clear();
      this.router.navigateByUrl('login');
    }
  }
}
