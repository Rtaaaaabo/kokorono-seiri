import { Injectable, Optional } from '@angular/core';
import { signInWithEmailAndPassword, signOut, UserCredential, User, GoogleAuthProvider } from 'firebase/auth';
// import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { authState } from 'rxfire/auth'
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

  public stateAuth(): Observable<any> {
    return this.afAuth.authState;
  }

  private authLogin(provider: any): Observable<any> {
    return from(this.afAuth.signInWithPopup(provider))
  }
}
