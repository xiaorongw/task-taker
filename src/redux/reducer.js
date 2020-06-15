import * as ActionTypes from './ActionTypes';

export const Reducer = (state = {tasks: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TASK:
            action.payload.id = state.tasks.length;
            const newTaskList = state.tasks.concat(action.payload);
            return {...state, tasks: newTaskList};

        case ActionTypes.TOGGLE_COMPLETE:
            break;

        default:
            return state
    }
}