import { Injectable } from '@angular/core';
import { Observable, from, of, bindCallback } from 'rxjs';
import { Query, getDatabase, ref, set, get, child, DataSnapshot, onValue, push, query, orderByKey, orderByChild } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  public setSuspicious(userId: string, message: string, date: string | null): Observable<void> {
    const db = getDatabase();
    const postListRef = ref(db, `users/${userId}`);
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
