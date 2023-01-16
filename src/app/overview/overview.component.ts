import { STRING_TYPE } from '@angular/compiler';
import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { checklistItem, SearchResults } from 'src/assets/types/tasks';

import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  constructor(private shared: SharedService, private router: Router) {}
  user!: SearchResults;
  data!: string | null;

  ngOnInit() {
    let data = localStorage.getItem('user');
    if (data) {
      this.user = JSON.parse(data);
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
  goToChecklist(checklistName: string) {
    this.user.checklists.forEach((element) => {
      if (element[0].name === checklistName) {
        localStorage.setItem('checklist', JSON.stringify(element[0].checklist));
        this.router.navigate(['checklist']);
      }
    });
  }
}
