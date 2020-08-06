import { Task } from 'src/app/shared/models/Task';
import { TaskService } from './../../core/services/task.service';
import { TaskHistory } from './../../shared/models/TaskHistory';
import { TaskhistoryService } from './../../core/services/taskhistory.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-history',
  templateUrl: './task-history.component.html',
  styleUrls: ['./task-history.component.css']
})
export class TaskHistoryComponent implements OnInit {
  taskId:number;
  task:Task;
  taskHistory: TaskHistory={
      taskId: this.taskId,
      userId: 0,
      title: "",
      description: "",
      dueDate: new Date(),
      completed: new Date(),
      remarks: "",
  }
  taskHistories: TaskHistory[]
  constructor(
    private route:ActivatedRoute,
    private taskhistoryService:TaskhistoryService,
    private taskService:TaskService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      this.taskId = +p.get('id');
    });
    this.taskService.getTaskByTaskId(this.taskId).subscribe(res=>{
      this.task=res;
      this.taskHistory.userId=this.task.userId;
      this.taskHistory.title=this.task.title;
      this.taskHistory.dueDate=this.task.dueDate;
      this.taskHistory.description=this.task.description;
      this.taskHistory.remarks=this.task.remarks;
    })

    // this.taskHistory.completed=Date.now().valueOf
    this.taskhistoryService.addTaskHistory(this.taskHistory).subscribe(res=>{
      console.log(res);
    });
    this.taskhistoryService.getAllTaskHistories().subscribe(res=>{
      this.taskHistories=res;
    })
  }

}
