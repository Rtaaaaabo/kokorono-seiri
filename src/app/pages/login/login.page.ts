import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  userInfo: any;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }


  signIn(): void {
    this.authService.googleAuthLogin().subscribe(() => {
      this.router.navigateByUrl('');
    });
  }

}
