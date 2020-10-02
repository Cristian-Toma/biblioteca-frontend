import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user/user.service';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLogin;

  constructor(
    private rest: UserService,
    private rst: AdminService,
    private router: Router
  ) {
    this.userLogin = {
      carnetCui: '',
      name: '',
      password: '',
      role: '',
      gettoken: 'true',
    };
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.userLogin.carnetCui != '' || this.userLogin.name) {
      if (this.userLogin.password != '') {
        this.rest.login(this.userLogin).subscribe((res: any) => {
          if (res.message) {
            alert(res.message);
          } else if (res.token) {
            alert('Bienvenido ' + this.userLogin.name);
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', res.user);
            if (res.user === 'ADMIN') {
              this.router.navigateByUrl('adminHome');
            } else {
              this.router.navigateByUrl('home');
            }
          } else {
            alert('Ha ocurrido un error desconocido');
          }
        });
      } else {
        alert('Ingresa la contraseña');
      }
    } else {
      alert(
        'Ingresa tus datos, si no tienes cuenta comunicate con servicio tecnico para que te asigne un usuario'
      );
    }
  }
}
