import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResults } from 'src/assets/types/tasks';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private shared: SharedService) {}
  sharedServiceUser!: SearchResults;
  data!: string | null;

  ngOnInit() {
    let data = localStorage.getItem('user');
    if (data) {
      this.data = JSON.parse(data);
    }
  }

  logout() {
    localStorage.clear();
    this.data = null;
    this.router.navigate(['login']);
  }
}
