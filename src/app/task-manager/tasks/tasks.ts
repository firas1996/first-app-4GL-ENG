import { Component, input } from '@angular/core';
import { User } from '../users-list/user-card/user.model';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  user = input<User>();
}
