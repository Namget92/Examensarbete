import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SearchResults } from 'src/assets/types/tasks';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private shared: SharedService
  ) {}
  errorMessage: any;
  showError: boolean = false;
  submit(login: any) {
    if (login.value.password && login.value.email) {
      if (this.showError === true) {
        this.showError = false;
        this.errorMessage = '';
      }
      this.http.get<SearchResults[]>('http://localhost:3000/users/').subscribe({
        next: (data) => {
          data.forEach((arr) => {
            if (
              arr.email === login.value.email &&
              arr.password === login.value.password
            ) {
              this.shared.setUser(arr);
              this.router.navigate(['overview']);
            } else if (
              arr.email !== login.value.email &&
              arr.password === login.value.password
            ) {
              this.showError = true;
              this.errorMessage = 'Password or Email is incorrect';
            } else if (
              arr.email === login.value.email &&
              arr.password !== login.value.password
            ) {
              this.showError = true;
              this.errorMessage = 'Password or Email is incorrect';
            } else {
              this.showError = true;
              this.errorMessage = 'Password or Email is incorrect';
            }
          });
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.showError = true;
          console.error('There was an error', error);
        },
      });
    } else {
      this.showError = true;
      if (login.value.email && !login.value.password) {
        this.errorMessage = 'Password is requierd';
      } else if (!login.value.email && login.value.password) {
        this.errorMessage = 'Email is requierd';
      } else if (!login.value.email && !login.value.password) {
        this.errorMessage = 'Email and Password is requierd';
      } else {
      }
    }
  }
}
