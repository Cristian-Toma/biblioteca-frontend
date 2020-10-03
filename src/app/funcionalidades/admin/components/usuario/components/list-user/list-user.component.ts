import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  constructor(private rest: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getUser();
  }

  users: UserModel[] = [];

  getUser() {
    if (this.rest.isAdminLogged()) {
      this.rest.getUser().subscribe((res: any) => {
        res.data.map((user) => this.users.push(user));
      });
    } else {
      alert('Usuario No Autorizado');
      localStorage.clear();
      this.router.navigateByUrl('login');
    }
  }
}
