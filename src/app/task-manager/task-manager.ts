import { Component } from '@angular/core';
import { UsersList } from './users-list/users-list';

@Component({
  selector: 'app-task-manager',
  imports: [UsersList],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css',
})
export class TaskManager {}
