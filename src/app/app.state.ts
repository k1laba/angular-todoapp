import { Task } from "./models/task.model";
import { FilterType } from "./models/filter-type.model";

export interface AppState {
    tasks: Task[];
    selectedFilter: FilterType
}


