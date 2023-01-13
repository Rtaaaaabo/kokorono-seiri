import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { from } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { FirebaseService } from '../../../shared/services/firebase/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss'],
})
export class EditPage {

  constructor(
    public datePipe: DatePipe,
    public router: Router,
    private authService: AuthService,
    private firebaseService: FirebaseService,
    private toastCtrl: ToastController,
  ) { }

  todayDate: string | null = this.datePipe.transform(new Date(), 'yyyy/MM/dd');
  text: string = '';
  disabledSave: boolean = true;

  public onSave(): void {
    const createDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
    const toast = from(this.toastCtrl.create({
      message: '保存しました',
      duration: 3000,
      position: 'bottom'
    }));
    this.authService.userId
      .pipe(tap(() => this.disabledSave = true))
      .pipe(concatMap((userId) => this.firebaseService.setSuspicious(userId, this.text.replace(/\r?\n/g, '\n'), createDate)))
      .pipe(concatMap(() => toast))
      .pipe(concatMap((data) => from(data.present())))
      .pipe(map(() => this.text = ''))
      .subscribe({
        next: () => this.disabledSave = false,
      });
  }

  public signOut(): void {
    this.authService.googleAuthLogout().subscribe(() => {
      this.router.navigateByUrl('/login');
    });
  }

  public changeStatusText(ev: any): void {
    this.disabledSave = true;
    const textValue = ev.target.value.split('').filter((char: string) => {
      return !/^\s/.test(char);
    }).join('');
    if (textValue !== '') {
      this.disabledSave = false;
    }

  }
}
