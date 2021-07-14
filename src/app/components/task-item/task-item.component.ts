import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import TaskModel from '../../TaskModel';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: TaskModel;
  @Output() onDeleteTask: EventEmitter<TaskModel> = new EventEmitter();
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

  onDelete(task: TaskModel) {
    this.onDeleteTask.emit(task);
  }
}
