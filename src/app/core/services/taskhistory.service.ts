import { TaskHistory } from './../../shared/models/TaskHistory';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TaskhistoryService {

  constructor(
    private apiService:ApiService
  ) { }

  addTaskHistory(taskHistory:TaskHistory):Observable<any>{
    return this.apiService.create('taskhistory/create',taskHistory)
  }
  // getTaskHistoryByTaskId():Observable<TaskHistory[]>{
  //   return this.apiService.getAll()
  // }
}
