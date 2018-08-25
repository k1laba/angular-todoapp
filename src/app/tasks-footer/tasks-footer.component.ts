import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FilterType } from '../models/filter-type.model';
import { SetFilterAction, ClearCompletedAction } from '../app.action';

@Component({
  selector: 'app-tasks-footer',
  templateUrl: './tasks-footer.component.html',
  styleUrls: ['./tasks-footer.component.css']
})
export class TasksFooterComponent implements OnInit {

  public itemsLeft$: Observable<number>;
  public filterType$: Observable<string>;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.itemsLeft$ = this.store.pipe(select(s => s.tasks.filter(t => !t.isCompleted).length));
    this.filterType$ = this.store.pipe(select(s => s.selectedFilter.toString()));
  }
  showAll() {
    this.store.dispatch(new SetFilterAction(FilterType.all));
  }
  showActive() {
    this.store.dispatch(new SetFilterAction(FilterType.active));
  }
  showCompleted() {
    this.store.dispatch(new SetFilterAction(FilterType.completed));
  }
  clearCompleted() {
    this.store.dispatch(new ClearCompletedAction());
  }
}
