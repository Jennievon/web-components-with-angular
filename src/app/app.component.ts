import { Component } from '@angular/core';
import 'custom-task-web-component';

@Component({
  selector: 'app-root',
  template: `
    <task-scheduler
      title="My Angular Task Scheduler"
      (addTask)="handleAddTask($event)"
    ></task-scheduler>
  `,
})
export class AppComponent {
  handleAddTask(event: any) {
    const task = event.detail;
    console.log('Task added:', task);
  }
}
