import { Routes } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';

import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [

    {path: 'details', title:'Details', component: TaskDetailsComponent},
    {path: 'list', title:'List', component:TaskListComponent},
    {path:'', redirectTo:'taskList', pathMatch: 'full'}

];
