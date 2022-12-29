import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  private _user$;
  constructor(
    private router: Router,
  ) {
    console.log('BehaviorSubject');
    this._user$ = new BehaviorSubject(null);
  }

  get user$() {
    return this._user$.asObservable();
  }

  public login(): void {
    from(GoogleAuth.signIn())
      .subscribe((user: any) => {
        this._user$.next(user);
        this.router.navigateByUrl("");
      })

  }

  public logout(): void {
    from(GoogleAuth.signOut()).subscribe(() => this._user$.next(null));
  }
}
