import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  // depricated way of using subscribe method
  // getUsers() {
  //   this.http.get('https://localhost:5001/api/users').subscribe(response => {
  //     this.users = response;
  //   }, error => {
  //     console.log(error);
  //   })
  // }

  //observer pattern way of using subscribe which is non-deprecated
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error)
    })
  }

}
