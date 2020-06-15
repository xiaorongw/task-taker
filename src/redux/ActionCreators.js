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