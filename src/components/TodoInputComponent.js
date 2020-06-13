import React, { Component } from 'react';
import {Card, Button, Input} from 'reactstrap';
import { SingleDatePicker } from 'react-dates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

class TodoInput extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            date: null
        }
    }
    
    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col d-flex justify-content-start today'>
                        <h2>Today</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Card body style={{backgroundColor:'rgb(111, 133, 159)', borderColor: 'rgb(111, 133, 159)', marginTop:'20px'}}>
                            {/* <CardText>Task of the day</CardText> */}
                            <div className='row d-flex justify-content-between'>
                                <div className='col-10'>
                                    <Input type='text' placeholder='Task of the day' />
                                </div>
                                <div className='col-2'>
                                    {/* <FontAwesomeIcon className="icon" icon={faCalendar} /> */}
                                    <SingleDatePicker
                                        date={this.state.date} // momentPropTypes.momentObj or null
                                        onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                                        focused={this.state.focused} // PropTypes.bool
                                        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                        id="your_unique_id" // PropTypes.string.isRequired,
                                        placeholder="Due date"
                                        small
                                        block
                                        className="datepicker"
                                    />
                                </div>
                            </div>
                            <div className='row' style={{marginTop:'10px'}}>
                                <div className='col d-flex justify-content-start'>
                                    <Button className='task-button'>Add Task</Button>
                                </div>
                            </div>

                        </Card>
                    </div>
                </div>
            </div>
        );
    }

}

export default TodoInput;