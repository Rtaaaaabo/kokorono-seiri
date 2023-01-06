import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { YearMonthFormatPipe } from './pipes/year-month-format/year-month-format.pipe';

@NgModule({
  declarations: [
    YearMonthFormatPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    YearMonthFormatPipe
  ],
  providers: [
    DatePipe,
  ],
})
export class SharedModule { }
