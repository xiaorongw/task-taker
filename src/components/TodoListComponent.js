import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false, // to push to redux store
            hover: false
        };
        this.toggleCompleted = this.toggleCompleted.bind(this);
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleCompleted() {
        this.setState({completed: !this.state.completed});
    }

    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    render() {
        if (this.props.item.due) {
            return(
                <div className='row' key={this.props.item.id}>
                    <div className='col'>
                        <ListGroupItem className='todo-item' 
                                onClick={this.toggleCompleted}
                                onMouseOver={this.toggleHover}
                                onMouseOut={this.toggleHover}
                        >
                            {
                                !this.state.hover ? // if not hovered
                                    !this.state.completed
                                        ? <FontAwesomeIcon className="task-icon" icon={faCircle} />
                                        : <FontAwesomeIcon className="task-icon" icon={faCheckCircle} />
                                : // if hovered over
                                    !this.state.completed
                                        ? <FontAwesomeIcon className="task-icon" icon={faCheckCircle} />
                                        : <FontAwesomeIcon className="task-icon" icon={faCheckCircle} /> // if already completed, stay checked
                            }
                            {
                                !this.state.completed
                                    ? <span>{this.props.item.task}</span>
                                    : <span style={{textDecoration:'line-through'}}>{this.props.item.task}</span>
                            }
                            <br />
                            <FontAwesomeIcon className="icon" icon={faCalendar} />
                            <small>{this.props.item.due}</small>        
                        </ListGroupItem>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div className='row' key={this.props.item.id}>
                    <div className='col'>
                        <ListGroupItem className='todo-item' 
                            onClick={this.toggleCompleted}
                            onMouseOver={this.toggleHover}
                            onMouseOut={this.toggleHover}
                        >
                            {
                                !this.state.hover ? // if not hovered
                                    !this.state.completed
                                        ? <FontAwesomeIcon className="task-icon" icon={faCircle} />
                                        : <FontAwesomeIcon className="task-icon" icon={faCheckCircle} />
                                : // if hovered over
                                    !this.state.completed
                                        ? <FontAwesomeIcon className="task-icon" icon={faCheckCircle} />
                                        : <FontAwesomeIcon className="task-icon" icon={faCheckCircle} /> // if already completed, stay checked
                            }
                            {
                                !this.state.completed
                                    ? <span>{this.props.item.task}</span>
                                    : <span style={{textDecoration:'line-through'}}>{this.props.item.task}</span>
                            }
                        </ListGroupItem>
                    </div>
                </div>
            );
        }
    }   
}


const RenderTasks = (taskList) => {
    const todolist = taskList.map( (item) => {
        return <TaskItem item={item} />
    })
    return todolist;
}


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const TodoList = (props) => {    
    return(
        <div className='container todo-list'>
            <ListGroup flush>
                {RenderTasks(props.tasks)}
            </ListGroup>
        </div>      
    );
}

export default connect(mapStateToProps)(TodoList);