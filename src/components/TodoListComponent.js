import React, {useState, Component} from 'react';
import TODO from '../assets/db.js';
import { ListGroup, ListGroupItem, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';


const RenderTasks = () => {
    const todolist = TODO.map( (item) => {
        if (item.due !== '') {
            return (
                <div className='row' key={item.id}>
                    <div className='col'>
                        <span className='change-icon'>
                            <ListGroupItem className='todo-item'>
                                <FontAwesomeIcon className="task-icon" icon={faCircle} />
                                <FontAwesomeIcon className="task-icon" icon={faCheckCircle} />
                                {item.task}
                                <br />
                                <FontAwesomeIcon className="icon" icon={faCalendar} />
                                <small>{item.due}</small>        
                            </ListGroupItem>
                        </span>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className='row'>
                    <div className='col'>
                        <span className='change-icon'>
                            <ListGroupItem className='todo-item'>
                                <FontAwesomeIcon className="task-icon" icon={faCircle} />
                                <FontAwesomeIcon className="task-icon" icon={faCheckCircle} />
                                {item.task}
                            </ListGroupItem>
                        </span>
                    </div>
                </div>
            );
        }
    })
    return todolist;
}


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskIsHovered: false
        }
    }

    toggleTaskHover() {
        this.setState({taskIsHovered: !this.state.taskIsHovered})
    }
    
    render() {
        return(
            <div className='container todo-list'>
                <ListGroup flush>
                    {RenderTasks()}
                </ListGroup>
            </div>      
        );
    }
}

export default TodoList;