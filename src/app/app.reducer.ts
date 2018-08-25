import { AppState } from "./app.state";
import { FilterType } from "./models/filter-type.model";
import { TodoActionsUnion, TodoActionTypes } from "./app.action";

const initialState: AppState = {
    tasks: [],
    selectedFilter: FilterType.all
};

export const rootReducer = function (state: AppState = initialState, action: TodoActionsUnion) {
    switch (action.type) {
        case TodoActionTypes.ADD_TASK: {
            return { ...state, tasks: [...state.tasks, action.payload] };
        }
        case TodoActionTypes.REMOVE_TASK: {
            return { ...state, tasks: [...state.tasks.filter(t => t.name !== action.payload.name)] };
        }
        case TodoActionTypes.CLEAR_COMPLETED: {
            return { ...state, tasks: [...state.tasks.filter(t => !t.isCompleted)] };
        }
        case TodoActionTypes.TOGGLE_ALL: {
            const newState = { ...state };
            newState.tasks = newState.tasks.map(t => { return { ...t, isCompleted: action.payload }; })
            return newState;
        }
        case TodoActionTypes.EDIT_TASK: {
            const tasks = [...state.tasks].map(t => action.payload[t.name] || t);
            return { ...state, tasks: tasks };
        }
        case TodoActionTypes.SET_FILTER: {
            return { ...state, selectedFilter: action.payload };
        }
        case TodoActionTypes.TOGGLE_TASK: {
            const newState = { ...state };
            newState.tasks = newState.tasks.map(t => t.name === action.payload.name ? { ...t, isCompleted: !t.isCompleted } : t);
            return newState;
        }
        default:
            return state;
    }
}