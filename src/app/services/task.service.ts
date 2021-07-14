import { Injectable } from '@angular/core';
import TaskModel from 'src/app/TaskModel';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}
