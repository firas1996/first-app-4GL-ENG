import { Component } from '@angular/core';
import { USERS } from './users-data';
import { UserCard } from './user-card/user-card';
import { User } from './user-card/user.model';

@Component({
  selector: 'app-users-list',
  imports: [UserCard],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList {
  users = USERS;
  getSelectedUser(user: User) {
    console.log(user);
  }
}
