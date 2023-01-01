import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userId = new BehaviorSubject<string>("");

  constructor(
    public afAuth: AngularFireAuth) { }

  public googleAuthLogin(): Observable<any> {
    return from(this.authLogin(new GoogleAuthProvider));
  }

  public googleAuthLogout(): Observable<any> {
    return from(this.afAuth.signOut());
  }

  public stateAuth(): Observable<any> {
    return this.afAuth.authState;
  }

  public stateUserId(userId: string): void {
    this.userId.next(userId);
  }

  private authLogin(provider: any): Observable<any> {
    return from(this.afAuth.signInWithPopup(provider))
  }
}
