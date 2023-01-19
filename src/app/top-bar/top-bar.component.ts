import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { checklistItem, SearchResults } from 'src/assets/types/tasks';

import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  constructor(
    private route: ActivatedRoute,
    private shared: SharedService,
    private router: Router
  ) {}

  @Input()
  pageName!: string;

  user!: SearchResults;
  data!: string | null;
  logout() {
    localStorage.clear();
    this.data = null;
    this.router.navigate(['login']);
  }
  checklists() {
    this.router.navigate(['checklist']);
  }
  about() {
    this.router.navigate(['about']);
  }
}
