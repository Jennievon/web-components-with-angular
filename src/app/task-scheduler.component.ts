import { Component } from '@angular/core';
import 'custom-task-web-component';

@Component({
  selector: 'app-task-scheduler',
  template:
    '<task-scheduler title="My Angular Task Scheduler"></task-scheduler>',
})
export class TaskSchedulerComponent {}
