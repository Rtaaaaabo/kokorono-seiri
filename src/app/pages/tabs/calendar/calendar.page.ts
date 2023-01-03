import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../shared/services/firebase/firebase.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Expressive } from '../../../shared/models/expressive.model';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  months: Array<number> = [];
  expressiveList: Array<Expressive> = [];
  modalData!: Expressive
  opts = {
    slidesPerView: 5,
    spaceBetween: 5,
    slidesOffsetBefore: 0
  }
  isOpen = false;

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService,
  ) { }

  public ngOnInit(): void {
    this.authService.userId
      .pipe(concatMap((userId) => this.firebaseService.getSuspicious(userId)))
      .subscribe((data) => {
        this.expressiveList = Object.keys(data.val()).map((dataKey: string) => {
          return { key: dataKey, ...data.val()[dataKey] }
        });
      });
  }

  public onClickMonthChip(month: number): void {
    console.log(month);
  }

  public onClickNavigateModal(data: Expressive): void {
    this.modalData = data;
    this.isOpen = true;
  }

}
