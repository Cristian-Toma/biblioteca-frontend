import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MagazineModel } from 'src/app/models/magazine.model';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-list-magazine',
  templateUrl: './list-magazine.component.html',
  styleUrls: ['./list-magazine.component.css'],
})
export class ListMagazineComponent implements OnInit {
  constructor(private rest: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getMagazine();
  }

  magazines: MagazineModel[] = [];

  getMagazine() {
    if (this.rest.isAdminLogged()) {
      this.rest.getMagazine().subscribe((res: any) => {
        res.data.map((magazine) => this.magazines.push(magazine));
      });
    } else {
      alert('Usuario No Autorizado');
      localStorage.clear();
      this.router.navigateByUrl('login');
    }
  }
}
