import { Component, OnInit } from '@angular/core';
import TaskModel from 'src/app/TaskModel';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: TaskModel[] = [];

  constructor(private taskSetvice: TaskService) {}

  ngOnInit(): void {
    this.taskSetvice.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
