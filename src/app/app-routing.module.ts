import { TaskHistoryComponent } from './tasks/task-history/task-history.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'tasks/user/:id',component:TaskListComponent},
  {path:'taskhistory/task/:id',component:TaskHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
