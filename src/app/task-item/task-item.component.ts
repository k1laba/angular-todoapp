import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { RemoveTaskAction, ToggleTaskAction, EditTaskAction } from '../app.action';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  public mode: string = "view";
  @Input() task: Task;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  remove(task: Task) {
    this.store.dispatch(new RemoveTaskAction(task));
  }
  toggle(task: Task) {
    this.store.dispatch(new ToggleTaskAction(task));
  }
  save(newTitle: string, task: Task) {
    this.mode = 'view';
    const payload = { [task.name]: { name: newTitle, isCompleted: task.isCompleted } }
    this.store.dispatch(new EditTaskAction(payload));
  }
}
