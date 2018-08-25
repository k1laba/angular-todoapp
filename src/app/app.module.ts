import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksFooterComponent } from './tasks-footer/tasks-footer.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksHeaderComponent } from './tasks-header/tasks-header.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducer } from './app.reducer';
@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TasksFooterComponent,
    TaskListComponent,
    TasksHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(null, { reducerFactory: () => rootReducer}),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
