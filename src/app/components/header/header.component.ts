import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiServise: UiService) {
    this.subscription = this.uiServise
      .onToggle()
      .subscribe((value) => (this.showAddTask = !this.showAddTask));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiServise.toggleAddTask();
  }
}
