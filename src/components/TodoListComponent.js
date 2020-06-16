import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';
import TaskItem from './TaskItemComponent';


const RenderTasks = (taskList) => {
    const todolist = taskList.map( (item) => {
        return <TaskItem item={item} key={item.id} />
    })
    return todolist;
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const TodoList = (props) => {  
    const tabFilter = props.tabFilter;
    let taskList;

    if (tabFilter == 'completed') {
        taskList = props.tasks.filter(task => task.completed);
    }    
    else if (tabFilter == 'outstanding') {
        taskList = props.tasks.filter(task => !task.completed);
    }
    else { // all
        taskList = props.tasks;
    }

    return (
        <div className='container todo-list'>
            <ListGroup flush>
                {RenderTasks(taskList)}
            </ListGroup>
        </div>  
    )
}

export default connect(mapStateToProps)(TodoList);