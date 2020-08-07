import { Task } from './../../shared/models/Task';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private apiService:ApiService
  ) { }

  getTasksByUserId(userId:number):Observable<Task[]>{
    return this.apiService.getAll(`task/tasks/user/${userId}`);
  }

  getTaskByTaskId(taskId:number):Observable<Task>{
    return this.apiService.getOne('task/',taskId);
  }

  addTask(task:Task):Observable<Task>{
    return this.apiService.create('task/create',task);
  }
}
