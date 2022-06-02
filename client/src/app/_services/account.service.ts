// angular component is a singleton - will stay initialized until
// user disposes of it. data does not get destroyed until app is closed down

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

//services are injectable
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
  // replay subject is a buffer. Stores values inside so Anytime a subscriber subscribes to this observable,
  // will emmit the last value that was inside it, or however many we want
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  // anything in pipe becomes an rxjs operator
  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          // add user as item in localStorage 
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user: User) => {
        if (user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  // helper method
  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  logout() {
    // remove user as item in localStorage
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
