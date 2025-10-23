import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  // @Input({ required: true }) id!: number;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) avatar!: string;
  // id = input.required<number>();
  // name = input.required<string>();
  // avatar = input.required<string>();
  user = input.required<User>();
  selectedUserId = output<Number>();
  isSelected = input<boolean>();
  imgPath = computed(() => '/users/' + this.user().avatar);
  onClickUser() {
    this.selectedUserId.emit(this.user().id);
    // console.log(this.user());
  }
}
