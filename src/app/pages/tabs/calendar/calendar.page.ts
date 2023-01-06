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

  public years: Array<string> = [];
  public activeYear: string = '2023-01'
  public months: Array<number> = [];
  public expressiveList: Array<Expressive> = [];
  public modalData!: Expressive
  public opts = {
    slidesPerView: 5,
    spaceBetween: 5,
    slidesOffsetBefore: 0
  }
  public isOpen = false;

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService,
  ) { }

  public ngOnInit(): void {
    this.authService.userId
      .pipe(concatMap((userId: string) => this.firebaseService.getSuspicious(userId)))
      .subscribe((data) => {
        // const yearArray = Object.keys(data.val()).map((item: string) => {
        //   return { year: item, ...data.val()[item] }
        // })
        this.years = Object.keys(data.val())
        console.log('Years', this.years);
        // console.log('Object', Object.keys(data.val()['2023']));
        // this.expressiveList = Object.keys(data.val()).map((dataKey: string) => {
        //   return { key: dataKey, ...data.val()[dataKey] }
        // });
      });
  }

  public activeIndex() {
    console.log('Active Index');
  }

  public onClickMonthChip(month: string): void {
    console.log(month);
  }

  public onClickNavigateModal(data: Expressive): void {
    this.modalData = data;
    this.isOpen = true;
  }

}
