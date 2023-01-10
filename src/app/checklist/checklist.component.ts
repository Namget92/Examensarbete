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

  ngOnInit() {
    this.currentChecklist = this.shared.getCurrentChecklist();
    console.log(this.currentChecklist);
  }
  goToLogin() {
    this.router.navigate(['login']);
  }
}
