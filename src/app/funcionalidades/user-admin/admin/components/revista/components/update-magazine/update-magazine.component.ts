import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MagazineModel } from 'src/app/models/magazine.model';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-update-magazine',
  templateUrl: './update-magazine.component.html',
  styleUrls: ['./update-magazine.component.css'],
})
export class UpdateMagazineComponent implements OnInit {
  magazine: MagazineModel;
  constructor(private rest: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.magazine = new MagazineModel(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
  }

  getToUpdate() {
    let data = {};

    for (const prop in this.magazine) {
      if (this.magazine[prop] !== '') {
        data[prop] = this.magazine[prop];
      }
    }

    return data;
  }

  editMagazine() {
    if (this.rest.isAdminLogged()) {
      this.rest.modifyMagazine(this.getToUpdate()).subscribe((res: any) => {
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
