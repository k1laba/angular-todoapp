import { Component, OnInit, Inject } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { AddTaskAction } from '../app.action';

@Component({
  selector: 'app-tasks-header',
  templateUrl: './tasks-header.component.html',
  styleUrls: ['./tasks-header.component.css']
})
export class TasksHeaderComponent implements OnInit {

  public title:string;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }
  createTask() {
    this.store.dispatch(new AddTaskAction({ name: this.title, isCompleted: false}));
    this.title = "";
  }
}
