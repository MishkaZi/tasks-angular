import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import TaskModel from 'src/app/TaskModel';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<TaskModel> = new EventEmitter();

  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiServise: UiService) {
    this.subscription = this.uiServise
      .onToggle()
      .subscribe((value) => (this.showAddTask = !this.showAddTask));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    //Clearing form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
