import { TaskService } from './../../core/services/task.service';
import { Task } from './../../shared/models/Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  task:Task={
    id:undefined,
    userId:undefined,
    title:"",
    description:"",
    dueDate:undefined,
    priority:"",
    remarks:""
  };
  constructor(
    private taskService:TaskService
  ) { }

  ngOnInit(): void {
  }

  addTask(){
    console.log(this.task);
    this.taskService.addTask(this.task).subscribe(res=>{
      console.log(res)
    })
  }

}
