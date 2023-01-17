import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { checklistItem, SearchResults } from 'src/assets/types/tasks';
import { SharedService } from '../shared/shared.service';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private shared: SharedService, private router: Router) {}
  currentChecklist!: checklistItem[];
  user!: SearchResults;
  data!: string | null;

  ngOnInit() {
    let userData: string | null = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
    let userChecklist: string | null = localStorage.getItem('checklist');
    if (userChecklist) {
      this.currentChecklist = JSON.parse(userChecklist);
    }
  }
}
