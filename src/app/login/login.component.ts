import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  submit(login: any) {
    if (login.value.email === 'test' && login.value.password === 'test') {
      console.log('Im in!');
    }
  }
}
