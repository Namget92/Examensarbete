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
    if (login.value.password === 'test2') {
      this.http.get<SearchResults>('http://localhost:3000/users/2').subscribe({
        next: (data) => {
          if (this.showError === true) {
            this.showError = false;
          }
          this.shared.setUser(data);
          this.router.navigate(['overview']);
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.showError = true;
          console.error('There was an error!', error);
        },
      });
    }
    if (login.value.password === 'test') {
      this.http.get<SearchResults>('http://localhost:3000/users/1').subscribe({
        next: (data) => {
          if (this.showError === true) {
            this.showError = false;
          }
          this.shared.setUser(data);
          this.router.navigate(['overview']);
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.showError = true;
          console.error('There was an error!', error);
        },
      });
    }
  }
}
