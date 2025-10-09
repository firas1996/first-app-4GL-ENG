import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { TaskManager } from './task-manager/task-manager';

@Component({
  selector: 'app-root',
  imports: [Login, TaskManager],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('first-app');
}
