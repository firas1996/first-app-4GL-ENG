import { Component, input } from '@angular/core';
import { TaskType } from '../task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  taskData = input.required<TaskType>();
}
