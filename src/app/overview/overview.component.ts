import { Component } from '@angular/core';
import mockdata from './mockdata.json';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {
  checklistItems = mockdata;
}
