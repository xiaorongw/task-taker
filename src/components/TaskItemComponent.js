import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ListGroupItem, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { toggleComplete } from '../redux/ActionCreators';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleComplete: (taskId) => dispatch(toggleComplete(taskId))
    }
}

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: this.props.item.completed,
            hover: false
        };
        this.toggleCompleted = this.toggleCompleted.bind(this);
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleCompleted(taskId) {
        this.props.toggleComplete(taskId);
    }

    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    render() {
        if (this.props.item.due) {
            return(
                <div className='row'>
                    <div className='col'>
                        <ListGroupItem className='todo-item' 
                                onClick={() => this.toggleCompleted(this.props.item.id)}
                                onMouseOver={this.toggleHover}
                                onMouseOut={this.toggleHover}
                        >
                            {
                                !this.state.hover ? // if not hovered
                                    !this.props.item.completed
                                        ? <FontAwesomeIcon className="task-icon" icon={faCircle} />
                                        : <FontAwesomeIcon className="task-icon" icon={faCheckCircle} />
                                : // if hovered over
                                    !this.props.item.completed
                                        ? <FontAwesomeIcon className="task-icon" icon={faCheckCircle} />
                                        : <FontAwesomeIcon className="task-icon" icon={faCheckCircle} /> // if already completed, stay checked
                            }
                            {
                                !this.props.item.completed
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
                <div className='row'>
                    <div className='col'>
                        <ListGroupItem className='todo-item' 
                            onClick={() => this.toggleCompleted(this.props.item.id)}
                            onMouseOver={this.toggleHover}
                            onMouseOut={this.toggleHover}
                        >
                            {
                                !this.state.hover ? // if not hovered
                                    !this.props.item.completed
                                        ? <FontAwesomeIcon className="task-icon" icon={faCircle} />
                                        : <FontAwesomeIcon className="task-icon" icon={faCheckCircle} />
                                : // if hovered over
                                    !this.props.item.completed
                                        ? <FontAwesomeIcon className="task-icon" icon={faCheckCircle} />
                                        : <FontAwesomeIcon className="task-icon" icon={faCheckCircle} /> // if already completed, stay checked
                            }
                            {
                                !this.props.item.completed
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

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);