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

  deleteTask(task: TaskModel) {
    this.taskSetvice
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id != task.id))
      );
  }
  toggleReminder(task: TaskModel) {
    task.reminder = !task.reminder;

    this.taskSetvice.toggleTask(task).subscribe();
  }

  addTask(task: TaskModel) {
    this.taskSetvice.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
