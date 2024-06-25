import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private as: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  async login() {

    try {
      let resp: any = await this.as.loginWithUsernameAndPassword(this.username, this.password)
      localStorage.setItem('token', resp['token']);
      this.router.navigateByUrl('/todos')
    } catch (e) {
      console.log("error");
    }
  }
}