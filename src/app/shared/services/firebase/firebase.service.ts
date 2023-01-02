import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { getDatabase, ref, set, get, child, DataSnapshot } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  public setSuspicious(userId: string, message: string, date: string | null): Observable<void> {
    const db = getDatabase();
    return from(set(ref(db, `users/${userId}`), {
      message,
      date,
    }))
  }

  public getSuspicious(userId: string): Observable<DataSnapshot> {
    const dbRef = ref(getDatabase());
    return from(get(child(dbRef, `users/${userId}`)));
  }
}
