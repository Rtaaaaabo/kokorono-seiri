import { Component, OnInit } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
import { from } from 'rxjs';
import { AuthService } from '../../shared/services/auth/auth.service';
import { AuthGuardService } from '../../shared/services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  userInfo: any;

  constructor(
    private authGuardService: AuthGuardService,
    private authService: AuthService,
  ) {
    if (!isPlatform('capacitor')) {
      // GoogleAuth.initialize()
    }
  }


  signIn(): void {
    this.authService.googleAuth().subscribe((data) => {
      console.log(data);
    })
    this.authGuardService.login();
  }

  signOut(): void {
    // this.authGuardService.logout();
  }

}
