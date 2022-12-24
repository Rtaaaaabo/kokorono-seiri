import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { from } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss'],
})
export class EditPage {

  constructor(
    public datePipe: DatePipe,
    private toastCtrl: ToastController,
  ) { }

  todayDate: string | null = this.datePipe.transform(new Date(), 'yyyy/MM/dd');
  text: string = '';

  onSave(): void {
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
}
