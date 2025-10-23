import { Component, computed, input, output, signal } from '@angular/core';
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
  abc = signal<Number | null>(null);
  theUser = output<User>();
  selectedUser = computed(() => {
    return this.users.find((user) => user.id == this.abc());
  });
  getSelectedUser(userId: Number) {
    this.abc.set(userId);
    this.theUser.emit(this.selectedUser()!);
  }
}
