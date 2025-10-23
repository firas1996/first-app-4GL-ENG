import { Component } from '@angular/core';
import { UsersList } from './users-list/users-list';
import { User } from './users-list/user-card/user.model';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-task-manager',
  imports: [UsersList, Tasks],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css',
})
export class TaskManager {
  user!: User;
  getSelectedUser(user: User) {
    this.user = user;
  }
}
