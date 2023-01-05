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
    // const postListRef = ref(db, `users/${userId}/${year}/03`);
    const postListRef = ref(db, `users/${userId}/2024/02`);
    const newPostRef = push(postListRef);
    return from(set(newPostRef, { message, date }))
  }

  public getSuspicious(userId: string): Observable<any> {
    const db = getDatabase();
    const postRef = ref(db, `users/${userId}`);
    const orderByCreateDateItems = get(query(postRef));
    return from(orderByCreateDateItems);
  }

}
