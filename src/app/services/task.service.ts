import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Task } from '../Task';
import {TASKS} from '../mock-tasks'
import { Observable,of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = 'http://localhost:5000/tasks'

  constructor(private _http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this._http.get<Task[]>(this.apiURL)
  }

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiURL}/${task.id}`;
    return this._http.delete<Task>(url);
  }

  updateTaskReminder(task:Task):Observable<Task>{
    const url =`${this.apiURL}/${task.id}`;
    return this._http.put<Task>(url,task,httpOptions);
  }

  addTask(task:Task):Observable<Task>{
    return this._http.post<Task>(this.apiURL,task,httpOptions)
  }
}
