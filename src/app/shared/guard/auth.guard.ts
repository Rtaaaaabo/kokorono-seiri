import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.authService.stateAuth()
      .pipe(tap((user) => this.authService.stateUserId(user.uid)))
      .pipe(mergeMap((state: any) =>
        state ? of(true) : this.router.navigateByUrl('/login')
      ))
  }

}
