import { Component, input } from '@angular/core';
import { User } from '../users-list/user-card/user.model';
import { TASKS } from './tasks-data';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  user = input.required<User>();
  tasks = TASKS;
  get selectedUserTasks() {
    return this.tasks.filter((task) => {
      return task.userId == this.user().id;
    });
  }
}
