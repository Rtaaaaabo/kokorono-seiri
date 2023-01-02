import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../../../shared/services/firebase/firebase.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { from } from 'rxjs';
import { concatMap, map, switchMap } from 'rxjs/operators';
import { ModalDescContentComponent } from './components/modal-desc-content/modal-desc-content.component';
import { object } from 'rxfire/database';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  months: Array<number> = [1, 2, 3, 4, 5,];
  expressiveList: Array<{ key: string, date: string, message: string }> = [];
  modalData!: { key: string, date: string, message: string }
  opts = {
    slidesPerView: 5,
    spaceBetween: 5,
    slidesOffsetBefore: 0
  }
  isOpen = false;

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService,
    private modalCtrl: ModalController
  ) { }

  public ngOnInit(): void {
    this.authService.userId
      .pipe(concatMap((userId) => this.firebaseService.getSuspicious(userId)))
      .subscribe((data) => {
        this.expressiveList = Object.keys(data.val()).map(dataKey => {
          return { key: dataKey, ...data.val()[dataKey] }
        });
      });
  }

  public onClickMonthChip(month: number): void {
    console.log(month);
  }

  public onClickNavigateModal(data: { key: string, date: string, message: string }): void {
    this.modalData = data;
    this.isOpen = true;
  }

}
