import { Component } from '@angular/core';
import { TaskFilterComponent } from "../task-filter/task-filter.component";

@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.css',
    imports: [TaskFilterComponent]
})
export class TaskListComponent {

}
