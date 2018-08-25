import { AppState } from "./app.state";
import { createSelector } from "@ngrx/store";
import { FilterType } from "./models/filter-type.model";

const allTasks = (state: AppState) => state.tasks;
const currentFilter = (state: AppState) => state.selectedFilter;

export const filteredSelectors = createSelector(allTasks, currentFilter, (tasks, filter) => {
    switch (filter) {
        case FilterType.all:
            return tasks;
        case FilterType.active:
            return tasks.filter(t => !t.isCompleted);
        case FilterType.completed:
            return tasks.filter(t => t.isCompleted);
        default:
            return tasks;
    }
});