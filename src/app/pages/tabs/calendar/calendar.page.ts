import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FirebaseService } from '../../../shared/services/firebase/firebase.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Expressive } from '../../../shared/models/expressive.model';
import { concatMap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  public userId: string = '';
  public arrayYearMonth: Array<string> = [];
  public activeYearMonth: string | null = '';
  public expressiveList: Array<Expressive> = [];
  public modalData!: Expressive;
  public opts = {
    slidesPerView: 5,
    spaceBetween: 5,
    slidesOffsetBefore: 0
  }
  public isOpen = false;


  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService,
    private datePipe: DatePipe,
  ) { }

  public ngOnInit(): void {
    this.activeYearMonth = this.datePipe.transform(new Date(), 'yyyy-MM');
    this.authService.userId
      .pipe(map((userId: string) => this.userId = userId))
      .pipe(concatMap(() => this.firebaseService.getArrayYearMonth(this.userId)))
      .pipe(filter((data) => data.val()))
      .pipe(map((data) => this.arrayYearMonth = Object.keys(data.val())))
      .pipe(concatMap(() => this.firebaseService.getSuspicious(this.userId, this.activeYearMonth)))
      .subscribe((data) => {
        this.expressiveList = Object.keys(data.val()).map((dataKey: string) => {
          return { key: dataKey, ...data.val()[dataKey] }
        });
      });
  }

  public activeIndex() {
    console.log('Active Index');
  }

  public onClickMonthChip(yearMonth: string): void {
    this.activeYearMonth = yearMonth;
    this.firebaseService.getSuspicious(this.userId, this.activeYearMonth)
      .subscribe((data) => {
        this.expressiveList = Object.keys(data.val()).map((dataKey: string) => {
          return { key: dataKey, ...data.val()[dataKey] }
        });
      });
  }

  public onClickNavigateModal(data: Expressive): void {
    this.modalData = data;
    this.isOpen = true;
  }

  public colorActiveMonth(month: string): "primary" | "" {
    return this.activeYearMonth === month ? "primary" : ""
  }

}
