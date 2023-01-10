import { Component, OnInit } from '@angular/core';
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
  ngOnInit() {
    this.user = this.shared.getUser();
  }
  goToLogin() {
    this.router.navigate(['login']);
  }
  goToChecklist(checklistName: string) {
    this.user.checklists.forEach((element) => {
      if (element[0].name === checklistName) {
        console.log(element[0].checklist);
        this.shared.setCurrentChecklist(element[0].checklist);
        this.router.navigate(['checklist']);
      }
    });
  }
}
