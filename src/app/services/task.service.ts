import { Injectable } from '@angular/core';
import TaskModel from 'src/app/TaskModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<TaskModel[]> {
    const tasks = this.http.get<TaskModel[]>(this.apiUrl);
    return tasks;
  }

  deleteTask(task: TaskModel): Observable<TaskModel> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TaskModel>(url);
  }

  toggleTask(task: TaskModel): Observable<TaskModel> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<TaskModel>(url, task, httpOptions);
  }

  addTask(task: TaskModel): Observable<TaskModel> {
    const url = `${this.apiUrl}`;
    return this.http.post<TaskModel>(url, task, httpOptions);
  }
}
