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
  add = output<{ title: string; desc: string; date: string }>();
  entredTitle = '';
  entredDesc = '';
  entredDate = '';
  onSubmit() {
    this.add.emit({
      title: this.entredTitle,
      desc: this.entredDesc,
      date: this.entredDate,
    });
    this.handelForm.emit();
  }
  onClose() {
    this.handelForm.emit();
  }
}
