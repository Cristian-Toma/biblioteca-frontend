import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {

  user: UserModel;


  constructor(private rest: UserService) {
    this.user = new UserModel('','','','');
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
    if(this.user.carnetCui != '' &&
        this.user.name != '' &&
        this.user.lastname != '' &&
        this.user.password != ''){
      this.rest.saveUser(this.user).subscribe((res:any)=>{
        if(res.message){
          alert(res.message)
        }else if(res.user){
          alert('Usuario creado con user: ' + res.user.username)
        }else{
          alert('Ha ocurrido un problema, intentalo más tarde')
        }
      })
    }else{
      alert('Ingresa todos los datos para crear tu cuenta')
    }
  }

}

  