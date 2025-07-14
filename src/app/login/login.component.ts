import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule,Validators,FormGroup} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { routes } from '../app.routes';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    constructor(private auth:AuthService, private router:Router){}
    loginForm= new FormGroup({
      username: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  user = false;
  onSubmit() {
  const uname: string = this.loginForm.value.username || '';
  const pword: string = this.loginForm.value.password || '';

  let res = this.auth.login(uname, pword);

  if (res === 200) {
      this.router.navigate(['/home']);
  } else {
    this.user = true;
  }
}


}
