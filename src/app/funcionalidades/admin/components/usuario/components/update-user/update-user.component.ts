import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  user: UserModel;
  constructor(private rest: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.user = new UserModel('', '', '', '', '');
  }

  getToUpdate() {
    let data = {};

    for (const prop in this.user) {
      if (this.user[prop] !== '') {
        data[prop] = this.user[prop];
      }
    }

    return data;
  }

  editUser() {
    if (this.rest.isAdminLogged()) {
      this.rest.modifyUser(this.getToUpdate()).subscribe((res: any) => {
        if (res) {
          alert('revista modificada');
        }
      });
    } else {
      alert('Usuario No Autorizado');
      localStorage.clear();
      this.router.navigateByUrl('login');
    }
  }
}
