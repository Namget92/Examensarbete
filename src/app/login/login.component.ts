import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SearchResults } from 'src/assets/types/tasks';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private http: HttpClient, router: Router) {}

  submit(login: any) {
    if (login.value.password === 'test2') {
      this.http.get<SearchResults>('http://localhost:3000/users/2').subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
        },
      });
    }
    if (login.value.password === 'test') {
      this.http
        .get<SearchResults>('http://localhost:3000/users/1')
        .subscribe((data) => {
          console.log(data.checklists[0]);
        });
    }
  }
}
