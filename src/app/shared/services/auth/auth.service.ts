import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth) { }

  public googleAuth(): Observable<any> {
    return from(this.authLogin(new GoogleAuthProvider));
  }

  public authLogout(): Observable<any> {
    return from(this.afAuth.signOut());
  }

  public stateAuth(): Observable<any> {
    return this.afAuth.authState;
  }

  private authLogin(provider: any): Observable<any> {
    return from(this.afAuth.signInWithPopup(provider))
  }
}
