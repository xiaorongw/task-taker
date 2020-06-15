import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Input } from 'reactstrap';
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
    
    switch (tabFilter) {
        case 'completed':
            return (
                <div className='container todo-list'>
                    <ListGroup flush>
                        {RenderTasks(props.tasks.filter(task => task.completed))}
                    </ListGroup>
                </div>  
            );
        case 'outstanding':
            return (
                <div className='container todo-list'>
                    <ListGroup flush>
                        {RenderTasks(props.tasks.filter(task => !task.completed))}
                    </ListGroup>
                </div>  
            );
        default: // all
            return (
                <div className='container todo-list'>
                    <ListGroup flush>
                        {RenderTasks(props.tasks)}
                    </ListGroup>
                </div>  
            );                    
    }
}

export default connect(mapStateToProps)(TodoList);