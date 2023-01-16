import { Injectable } from '@angular/core';
import { checklistItem, SearchResults } from 'src/assets/types/tasks';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  currentUser!: SearchResults;
  currentChecklist!: checklistItem[];

  setUser(user: SearchResults) {
    this.currentUser = user;
  }
  getUser() {
    return this.currentUser;
  }
  setCurrentChecklist(checklist: checklistItem[]) {
    this.currentChecklist = checklist;
  }

  getCurrentChecklist() {
    return this.currentChecklist;
  }
}
