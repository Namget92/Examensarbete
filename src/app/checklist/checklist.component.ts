import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { checklistItem, SearchResults } from 'src/assets/types/tasks';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
})
export class ChecklistComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private shared: SharedService,
    private router: Router
  ) {}
  currentChecklist!: checklistItem[];
  user!: SearchResults;
  data!: string | null;
  month: string = '';
  pageName = 'Checklist';
  editBoo = false;
  deleteDb = true;

  resetStats = {
    overallComments: '',
    checklists: [
      {
        id: 1,
        title: 'Reconciliation Differnces Status',
        value: 0,
        signedBy: '',
        signedDate: 0,
      },
      {
        id: 2,
        title: 'Profit And Loss Status',
        value: 0,
        signedBy: '',
        signedDate: 0,
      },
      {
        id: 3,
        title: 'Balance Sheet Status',
        value: 0,
        signedBy: '',
        signedDate: 0,
      },
      {
        id: 4,
        title: 'Cash Flow Status',
        value: 0,
        signedBy: '',
        signedDate: 0,
      },
      {
        id: 5,
        title: 'Notes Status',
        value: 0,
        signedBy: '',
        signedDate: 0,
      },
    ],
  };

  ngOnInit() {
    this.deleteDbFunc();
    this.setMonth(new Date().getMonth() + 1);
    let userData: string | null = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
    let userChecklist: string | null = localStorage.getItem('checklist');
    if (userChecklist) {
      this.currentChecklist = JSON.parse(userChecklist);
    }
  }

  editBooBtn(checklistItem: checklistItem) {
    console.log(checklistItem);
    console.log(this.user);
  }

  deleteDbFunc() {
    if (new Date().getDate() === 1 && this.deleteDb) {
      this.http
        .patch<SearchResults[]>(
          `http://localhost:3000/users/${this.user.id}`,
          this.resetStats
        )
        .subscribe({
          next: () => {
            this.deleteDb = false;
          },
          error: (error) => {
            console.error('There was an error', error);
          },
        });
    }
    if (new Date().getDate() !== 1 && !this.deleteDb) {
      this.deleteDb = true;
    }
  }

  setMonth(num: number) {
    switch (num) {
      case 1:
        return (this.month = 'January');
      case 2:
        return (this.month = 'February');
      case 3:
        return (this.month = 'March');
      case 4:
        return (this.month = 'April');
      case 5:
        return (this.month = 'May');
      case 6:
        return (this.month = 'June');
      case 7:
        return (this.month = 'July');
      case 8:
        return (this.month = 'August');
      case 9:
        return (this.month = 'September');
      case 10:
        return (this.month = 'October');
      case 11:
        return (this.month = 'November');
      case 12:
        return (this.month = 'December');
      default:
        return (this.month = '');
    }
  }
}
