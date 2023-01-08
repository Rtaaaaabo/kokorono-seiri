import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearMonthFormat'
})
export class YearMonthFormatPipe implements PipeTransform {

  transform(value: string | null, args: 'year' | 'month'): number {
    if (args === null) {
      return 0;
    }
    if (args === 'year') {
      const sliceYear = value?.slice(0, 4);
      const numberYear = Number(sliceYear);
      return numberYear;
    }
    const sliceMonth = value?.slice(-2);
    const numberMonth = Number(sliceMonth);
    return numberMonth;

  }

}
