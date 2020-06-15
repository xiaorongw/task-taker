import React, { Component } from 'react';
import {Card, Button, Input, Form, FormGroup} from 'reactstrap';
import { SingleDatePicker } from 'react-dates';
import { connect } from 'react-redux';
import { addNewTask } from '../redux/ActionCreators';
import moment from 'moment';

const mapDispatchToProps = dispatch => {
    return {
        addNewTask: (newTask, dueDate) => {dispatch(addNewTask(newTask, dueDate))}
    }
}

class TodoInput extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            task: '',
            date: null
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetFields = this.resetFields.bind(this);
    }
    
    handleChange(event) {
        this.setState({task: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.date !== null) {
            const dueDate = moment(this.state.date).format('DD-MMM-YYYY');
            this.props.addNewTask(this.state.task, dueDate);
        }
        else {
            this.props.addNewTask(this.state.task, '');
        }
        this.resetFields();
        // console.log(JSON.stringify(this.state)); 
    }

    resetFields() {
        this.setState({task: '', date: null})
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
                            <Form onSubmit={this.handleSubmit}>
                                <div className='row d-flex justify-content-between'>
                                    <div className='col-10'>
                                        <Input type='text' placeholder='Task of the day' value={this.state.task} onChange={this.handleChange} />
                                    </div>
                                    <div className='col-2'>
                                        <SingleDatePicker
                                            date={this.state.date} // momentPropTypes.momentObj or null
                                            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                                            focused={this.state.focused} // PropTypes.bool
                                            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                            id="your_unique_id" // PropTypes.string.isRequired,
                                            placeholder="Due date"
                                            small
                                            block
                                        />
                                    </div>
                                </div>
                                <div className='row' style={{marginTop:'10px'}}>
                                    <div className='col d-flex justify-content-start'>
                                        <Button type='submit' className='task-button'>Add Task</Button>
                                    </div>
                                </div>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(null, mapDispatchToProps)(TodoInput);