import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { checklistItem, Company, User } from 'src/assets/types/tasks';
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

  user!: User;
  company!: Company;
  month: string = '';
  pageName = 'Checklist';

  ngOnInit() {
    this.setMonth(new Date().getMonth() + 1);
    let userData: string | null = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
    let companyData: string | null = localStorage.getItem('company');
    if (companyData) {
      this.company = JSON.parse(companyData);
    }
  }

  editBooBtn(id: number) {
    console.log(id);
    const co = this.company;
    const list = co.checklist;
    list.map((items) => {
      if (items.id === id) {
        items.isBeingEdited = !items.isBeingEdited;
      }
    });
    this.http
      .patch<Company[]>(
        `http://localhost:3000/companies/${this.company.id}`,
        co
      )
      .subscribe({
        next: () => {
          this.getCompanyList(this.company.name);
        },
        error: (error) => {
          console.error('There was an error', error);
        },
      });
  }

  getDateForList() {
    let day = new Date().getDate().toString();
    let month = (new Date().getMonth() + 1).toString();
    let year = new Date().getFullYear().toString().slice(-2);
    if (day.length === 1) day = '0' + day;
    if (month.length === 1) month = '0' + month;
    return `${day}/${month}/${year}`;
  }

  deleteBtn(id: number) {
    const list = this.company.checklist;
    list.map((items) => {
      if (items.id === id) {
        items.id = items.id;
        items.title = items.title;
        items.isBeingEdited = false;
        items.value = 0;
        items.signedBy = '';
        items.signedDate = '';
      }
    });
    const comp: Company = {
      id: this.company.id,
      name: this.company.name,
      checklist: list,
      comments: this.company.comments,
      commentsBeingEdited: false,
    };
    this.http
      .put<Company[]>(
        `http://localhost:3000/companies/${this.company.id}`,
        comp
      )
      .subscribe({
        next: () => {
          this.getCompanyList(this.company.name);
        },
        error: (error) => {
          console.error('There was an error', error);
        },
      });
  }

  saveEditBtn(id: number, value: number) {
    const list = this.company.checklist;
    list.map((items) => {
      if (items.id === id) {
        items.id = items.id;
        items.title = items.title;
        items.isBeingEdited = !items.isBeingEdited;
        items.value = value;
        items.signedBy = this.user.name;
        items.signedDate = this.getDateForList();
      }
    });
    const comp: Company = {
      id: this.company.id,
      name: this.company.name,
      checklist: list,
      comments: this.company.comments,
      commentsBeingEdited: false,
    };
    this.http
      .put<Company[]>(
        `http://localhost:3000/companies/${this.company.id}`,
        comp
      )
      .subscribe({
        next: () => {
          this.getCompanyList(this.company.name);
        },
        error: (error) => {
          console.error('There was an error', error);
        },
      });
  }

  getCompanyList(company: string) {
    this.http.get<Company[]>('http://localhost:3000/companies/').subscribe({
      next: (data) => {
        data.forEach((arr) => {
          if (arr.name === company) {
            localStorage.setItem('company', JSON.stringify(arr));
            window.location.reload();
          }
        });
      },
      error: (error) => {
        console.error('There was an error', error);
      },
    });
  }

  commentBooSave(value?: string) {
    this.http
      .patch<Company[]>(`http://localhost:3000/companies/${this.company.id}`, {
        comments: value,
        commentsBeingEdited: false,
      })
      .subscribe({
        next: () => {
          this.getCompanyList(this.company.name);
        },
        error: (error) => {
          console.error('There was an error', error);
        },
      });
  }

  commentBooFlip() {
    this.http
      .patch<Company[]>(`http://localhost:3000/companies/${this.company.id}`, {
        commentsBeingEdited: true,
      })
      .subscribe({
        next: () => {
          this.getCompanyList(this.company.name);
        },
        error: (error) => {
          console.error('There was an error', error);
        },
      });
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
