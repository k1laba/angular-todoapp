import { Component, OnInit, Inject } from '@angular/core';
import { AppState } from '../app.state';
import { Store, select } from '@ngrx/store';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';
import { filteredSelectors } from '../app.selector';
import { ToggleAllAction } from '../app.action';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  toggleValue:boolean = false;
  tasks$: Observable<Task[]>;
  currentFilterType$: Observable<string>;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.tasks$ = this.store.pipe(select(s => filteredSelectors(s)));
    this.currentFilterType$ = this.store.pipe(select(s => s.selectedFilter.toString()));
  }
  toggleAll() {
    this.store.dispatch(new ToggleAllAction(this.toggleValue));
  }
}
