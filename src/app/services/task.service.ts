import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private tasks: Array<Task> = [];

  getTasks(): Array<Task>{
    this.tasks = this.getFromLocalStorage()

    return this.tasks
  }

  getById(id:number): Task | undefined {
    const task = this.tasks.find(c => c.id === id)
    return task
  }

  addTask(task:Task):void{
    this.tasks.push(task)
    this.saveToLocalStorage()
  }
  
  updateTask(){
    this.saveToLocalStorage()
  }

  removeTask(task:Task){
    const index = this.tasks.indexOf(task)

    if(index !== -1 ){

      this.tasks.splice(index, 1)

      this.saveToLocalStorage()
    }
  }

  private saveToLocalStorage(){

    const taskJson = JSON.stringify(this.tasks)

    localStorage.setItem('tasks', taskJson)
  }

  private getFromLocalStorage():Array<Task>{
    const taskJson = localStorage.getItem('tasks')

    if(!taskJson){
      return new Array<Task>()
    }

    return JSON.parse(taskJson)
  }
}
