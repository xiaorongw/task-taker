export const addNewTask = (newTask, dueDate) => (dispatch) => {    
    const newTaskObj = {
        task: newTask,
        due: dueDate,
        completed: false
    }

    dispatch(addTask(newTaskObj));
}

export const addTask = (taskObj) => {
    return({
        type: 'ADD_TASK',
        payload: taskObj
    })
}

export const toggleComplete = (taskId) => {
    return({
        type: 'TOGGLE_COMPLETE',
        payload: taskId
    })
}