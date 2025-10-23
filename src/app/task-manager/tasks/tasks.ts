import { Component, input } from '@angular/core';
import { User } from '../users-list/user-card/user.model';
import { TASKS } from './tasks-data';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  user = input<User>();
  tasks = TASKS;
  get selectedUserTasks() {
    return this.tasks.filter((task) => {
      return task.userId == this.user()?.id;
    });
  }
  onTaskComplete(taskId: Number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
