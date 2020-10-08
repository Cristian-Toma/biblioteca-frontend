import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MagazineModel } from 'src/app/models/magazine.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-buscar-revistas',
  templateUrl: './buscar-revistas.component.html',
  styleUrls: ['./buscar-revistas.component.css'],
})
export class BuscarRevistasComponent implements OnInit {
  constructor(private rest: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getMagazine();
  }

  magazines: MagazineModel[] = [];

  getMagazine() {
    if (this.rest.isUserLogged()) {
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
