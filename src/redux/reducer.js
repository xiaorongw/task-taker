import * as ActionTypes from './ActionTypes';

export const Reducer = (state = {tasks: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TASK:
            action.payload.id = state.tasks.length;
            const newTaskList = [action.payload].concat(...state.tasks);
            return {...state, tasks: newTaskList};

        case ActionTypes.TOGGLE_COMPLETE:
            const otherTasksList = state.tasks.filter((task) => task.id != action.payload);
            console.log(JSON.stringify(otherTasksList));
            let completedTask = state.tasks.filter((task) => task.id == action.payload)[0];
            console.log(JSON.stringify(completedTask));
            const currStatus = completedTask.completed;
            completedTask = {...completedTask, completed: !currStatus};
            return {...state, tasks: otherTasksList.concat(completedTask)}

        default:
            return state
    }
}