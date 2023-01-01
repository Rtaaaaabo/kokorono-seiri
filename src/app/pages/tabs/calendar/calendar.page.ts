import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../../../shared/services/firebase/firebase.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ModalDescContentComponent } from './components/modal-desc-content/modal-desc-content.component';

const ExpressionList: Array<{ date: string, content: string }> = [
  {
    date: '2022-12-01',
    content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
  {
    date: '2022-12-02',
    content: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
  },
]

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  months: Array<number> = [1, 2, 3, 4, 5,];
  expressiveList: Array<{ date: string, content: string }> = ExpressionList;
  modalData!: { date: string, content: string }
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
    this.authService.userId.subscribe(data => console.log('UserId', data));
  }

  public onClickMonthChip(month: number): void {
    console.log(month);
  }

  public onClickNavigateModal(data: { date: string, content: string }): void {
    this.modalData = data;
    this.isOpen = true;
  }

}
