import { Action } from "@ngrx/store";
import { Task } from "./models/task.model";
import { FilterType } from "./models/filter-type.model";

export const enum TodoActionTypes {
    ADD_TASK = "ADD_TASK",
    REMOVE_TASK = "REMOVE_TASK",
    CLEAR_COMPLETED = "CLEAR_COMPLETED",
    TOGGLE_ALL = "TOGGLE_ALL",
    EDIT_TASK = "EDIT_TASK",
    SET_FILTER = "SET_FILTER",
    TOGGLE_TASK = "TOGGLE_TASK"
}

export type TodoActionsUnion = AddTaskAction
    | RemoveTaskAction
    | ClearCompletedAction
    | ToggleAllAction
    | EditTaskAction
    | SetFilterAction
    | ToggleTaskAction;

export class AddTaskAction implements Action {
    readonly type = TodoActionTypes.ADD_TASK;
    constructor(public payload: Task) { }
}
export class RemoveTaskAction implements Action {
    readonly type = TodoActionTypes.REMOVE_TASK;
    constructor(public payload: Task) { }
}
export class ClearCompletedAction implements Action {
    readonly type = TodoActionTypes.CLEAR_COMPLETED
}
export class ToggleAllAction implements Action {
    readonly type = TodoActionTypes.TOGGLE_ALL;
    constructor(public payload: boolean) { }
}
export class EditTaskAction implements Action {
    readonly type = TodoActionTypes.EDIT_TASK;
    ;
    constructor(public payload: { [name: string]: Task }) { }
}
export class SetFilterAction implements Action {
    readonly type = TodoActionTypes.SET_FILTER;
    constructor(public payload: FilterType) { }
}
export class ToggleTaskAction implements Action {
    readonly type = TodoActionTypes.TOGGLE_TASK;
    constructor(public payload: Task) { }
}
