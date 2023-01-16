import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { checklistItem, SearchResults } from 'src/assets/types/tasks';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
})
export class ChecklistComponent implements OnInit {
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
  goToLogin() {
    this.router.navigate(['login']);
  }
  logout() {
    localStorage.clear();
    this.data = null;
    this.router.navigate(['login']);
  }
}
