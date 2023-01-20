import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/assets/types/tasks';
import { SharedService } from '../shared/shared.service';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  pageName = 'About';
  constructor(private shared: SharedService, private router: Router) {}
  user!: User;
  data!: string | null;

  ngOnInit() {
    let userData: string | null = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }
}
