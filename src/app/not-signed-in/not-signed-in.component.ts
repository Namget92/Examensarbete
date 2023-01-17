import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-signed-in',
  templateUrl: './not-signed-in.component.html',
  styleUrls: ['./not-signed-in.component.css'],
})
export class NotSignedInComponent {
  constructor(private router: Router) {}
  goToLogin() {
    this.router.navigate(['login']);
  }
}
