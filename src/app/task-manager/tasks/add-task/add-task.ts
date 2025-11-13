import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  handelForm = output<void>();
  onSubmit() {
    this.handelForm.emit();
  }
  onClose() {
    this.handelForm.emit();
  }
}
