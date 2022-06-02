import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

// decorator: gives a normal class extra powers
@Component({
  selector: 'app-root',
  // html found here
  templateUrl: './app.component.html',
  // css found here
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating App';
  users: any; // any keyword turns off type safety for typescript

  // dependency injection in angular:
  // note: http requests are naturally async
  // angular comes with lifecycle events. the lifecycle event that takes place after creation of constructor is called the initialization
  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser(){
    // because used JSON.stringify to turn to a string, we user .parse to get it out
    // get user from local storage
    const user: User = JSON.parse(localStorage.getItem('user'));
    // set that user as current user
    this.accountService.setCurrentUser(user);
  }

  // depricated way of using subscribe method
  // getUsers() {
  //   this.http.get('https://localhost:5001/api/users').subscribe(response => {
  //     this.users = response;
  //   }, error => {
  //     console.log(error);
  //   })
  // }
}
