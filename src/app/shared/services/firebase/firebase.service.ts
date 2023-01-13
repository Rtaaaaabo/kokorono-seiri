import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { DatePipe } from '@angular/common';
import { getDatabase, ref, set, get, push, query } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private datePipe: DatePipe,
  ) { }

  public setSuspicious(userId: string, message: string, date: string | null): Observable<void> {
    const db = getDatabase();
    const year = this.datePipe.transform(date, 'yyyy');
    const month = this.datePipe.transform(date, 'MM')
    const postListRef = ref(db, `users/${userId}/${year}-${month}`);
    const newPostRef = push(postListRef);
    console.log('Message', message);
    return from(set(newPostRef, { message, date }))
  }

  public getArrayYearMonth(userId: string): Observable<any> {
    const db = getDatabase();
    const postRef = ref(db, `users/${userId}`);
    const orderByCreateDateItems = get(query(postRef));
    return from(orderByCreateDateItems);
  }

  public getSuspicious(userId: string, yearMonth: string | null): Observable<any> {
    const db = getDatabase();
    const getRef = ref(db, `users/${userId}/${yearMonth}`);
    const suspiciousItems = get(query(getRef));
    return from(suspiciousItems);
  }

}
