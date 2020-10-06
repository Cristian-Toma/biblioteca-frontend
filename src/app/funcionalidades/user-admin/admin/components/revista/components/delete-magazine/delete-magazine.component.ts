import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-delete-magazine',
  templateUrl: './delete-magazine.component.html',
  styleUrls: ['./delete-magazine.component.css'],
})
export class DeleteMagazineComponent implements OnInit {
  constructor(private rest: AdminService, private router: Router) {}

  ngOnInit(): void {}

  _id: string = '';

  delete() {
    if (this.rest.isAdminLogged()) {
      this.rest.deleteMagazine(this._id).subscribe((res: any) => {
        if (res.magazine === true) {
          alert('revista eliminda');
        }
      });
    } else {
      alert('Usuario No Autorizado');
      localStorage.clear();
      this.router.navigateByUrl('login');
    }
  }
}
