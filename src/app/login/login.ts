import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  onLogin = () => {
    console.log(`email: ${this.email} - password: ${this.password}`);
    this.email = '';
    this.password = '';
  };
}
