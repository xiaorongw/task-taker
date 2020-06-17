import React, { useRef, useEffect, useState } from 'react';
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

    const refContainer = useRef(null);
    const [height, setHeight] = useState('50vh');

    useEffect(() => {
        // To make the height of the container for the list of tasks responsive (based on viewport's height)
        var topPx = refContainer.current.getBoundingClientRect().top; // get y coordinate of the todo-list div
        var windowHeight = window.innerHeight;
        var remainingHeight = ((1-(topPx/windowHeight))*100 - 4); // fit todo list into remaining height, with a 4% viewport height space at the bottom
        var hstring = remainingHeight.toString() + 'vh';  
    }, [])

    return (
        <div className='container todo-list' ref={refContainer} style={{height: height}}>
            <ListGroup flush>
                {RenderTasks(taskList)}
            </ListGroup>
        </div>  
    )
}

export default connect(mapStateToProps)(TodoList);