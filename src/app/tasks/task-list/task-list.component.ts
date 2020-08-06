import { TaskService } from './../../core/services/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  userId:number
  tasks:Task[]
  constructor(
    private route:ActivatedRoute,
    private taskService:TaskService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      this.userId = +p.get('id');
    });
    this.taskService.getTasksByUserId(this.userId).subscribe(res=>{
      console.log(res);
      this.tasks=res;
      console.log(this.tasks);
    })
  }

}
