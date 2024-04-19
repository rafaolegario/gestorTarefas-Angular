import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../model/task';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {
  
  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router){}

  task?: Task;

  ngOnInit(){
    let id = this.route.snapshot.paramMap.get('id')

    if(id==null){
      this.navigateBack()
    }else{

      this.task = this.taskService.getById(+id)
      
      if(this.task === undefined){
        this.navigateBack()
      }
    }

  }
  private navigateBack(){
    this.router.navigate(['/list'], {relativeTo: this.route})
  }

  save(){
    this.taskService.updateTask()

    this.navigateBack()
  }

  cancel(){
    this.navigateBack()
  }
}
