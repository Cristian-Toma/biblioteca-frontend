import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MagazineModel } from 'src/app/models/magazine.model';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-save-magazine',
  templateUrl: './save-magazine.component.html',
  styleUrls: ['./save-magazine.component.css'],
})
export class SaveMagazineComponent implements OnInit {
  magazine: MagazineModel;

  constructor(private rest: AdminService, private router: Router) {
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

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.magazine);
    if (
      this.magazine.author != '' &&
      this.magazine.title != '' &&
      this.magazine.edition != '' &&
      this.magazine.keyWords != '' &&
      this.magazine.themes != '' &&
      this.magazine.description != '' &&
      this.magazine.copies != '' &&
      this.magazine.avaible != '' &&
      this.magazine.actualFrecuency != '' &&
      this.magazine.published != ''
    ) {
      if (this.rest.isAdminLogged()) {
        this.rest.saveMagazine(this.magazine).subscribe((res: any) => {
          if (res.message) {
            alert(res.message);
          } else if (res.magazine) {
            alert('revista creada con el titulo: ' + this.magazine.title);
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
      alert('Ingresa todos los datos para guardar una revista');
    }
  }
}
