import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private uiServise: UiService, private router: Router) {
    this.subscription = this.uiServise
      .onToggle()
      .subscribe((value) => (this.showAddTask = !this.showAddTask));
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }


  toggleAddTask() {
    this.uiServise.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
