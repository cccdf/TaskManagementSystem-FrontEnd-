import { TaskhistoryService } from './../../core/services/taskhistory.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-history',
  templateUrl: './task-history.component.html',
  styleUrls: ['./task-history.component.css']
})
export class TaskHistoryComponent implements OnInit {
  taskId:number
  constructor(
    private route:ActivatedRoute,
    private taskhistoryService:TaskhistoryService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      this.taskId = +p.get('id');
    });
    
  }

}
