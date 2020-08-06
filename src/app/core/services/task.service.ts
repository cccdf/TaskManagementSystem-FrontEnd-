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
}
