import { Component, OnInit } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() {
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize()
    }
  }

  ngOnInit(): void {
  }

  signIn(): void {
    from(GoogleAuth.signIn()).subscribe(data => console.log(data))
  }

}
