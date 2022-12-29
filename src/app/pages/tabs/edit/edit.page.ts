import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { from } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { AuthService } from '../../../shared/services/auth/auth.service';
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
    private toastCtrl: ToastController,
  ) { }

  todayDate: string | null = this.datePipe.transform(new Date(), 'yyyy/MM/dd');
  text: string = '';

  public onSave(): void {
    const toast = from(this.toastCtrl.create({
      message: '保存しました',
      duration: 3000,
      position: 'bottom'
    }));
    // ここにAPIを追加する
    toast //ここは非同期でつなげる
      .pipe(concatMap((data) => from(data.present())))
      .pipe(map(() => this.text = ''))
      .subscribe();
  }

  public signOut(): void {
    this.authService.authLogout().subscribe(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
