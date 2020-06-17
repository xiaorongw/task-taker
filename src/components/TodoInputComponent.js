import React, { Component } from 'react';
import {Card, Button, Input, Form } from 'reactstrap';
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
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetFields = this.resetFields.bind(this);
    }
    
    handleChange(event) {
        this.setState({task: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.task !== '') {
            if (this.state.date !== null) {
                const dueDate = moment(this.state.date).format('DD-MMM-YYYY');
                this.props.addNewTask(this.state.task, dueDate);
            }
            else {
                this.props.addNewTask(this.state.task, '');
            }
            this.resetFields();
        }
    }

    resetFields() {
        this.setState({task: '', date: null})
    }

    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col d-flex justify-content-start align-items-center today'>
                        <h3>Today</h3>
                        <span className='today-date'>{moment().format('dddd, Do MMM')}</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Card body className='task-input'
                        style={{backgroundColor:'rgba(136, 144, 133, 0.6)', borderColor: 'rgb(235, 236, 231)', marginTop:'10px', borderRadius:'20px'}}>
                            <div className='container'>
                                <div className='row d-flex justify-content-center align-items-center'>
                                    <div className='col-sm-12 col-lg-1 d-flex justify-content-center align-self-center'>
                                        <img className='today-img align-self-center' src={require('../assets/today.png')} />
                                    </div>
                                    <div className='col-sm-12 col-lg-11'>
                                        <Form onSubmit={this.handleSubmit}>
                                            <div className='row'>
                                                <div className='col'>
                                                    <Input type='text' placeholder='Task of the day' value={this.state.task} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className='row' style={{marginTop:'10px'}}>
                                                <div className='col d-flex justify-content-start'>
                                                    <Button type='submit' className='task-button'>
                                                        <img className='addtask-img' src={require('../assets/add-task.png')} />
                                                        Add Task
                                                    </Button>
                                                </div>
                                                <div className='col d-flex justify-content-end'>
                                                    <SingleDatePicker
                                                        date={this.state.date} // momentPropTypes.momentObj or null
                                                        onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                                                        focused={this.state.focused} // PropTypes.bool
                                                        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                                        id="your_unique_id" // PropTypes.string.isRequired,
                                                        placeholder="Due date"
                                                        small
                                                        block
                                                        numberOfMonths={1}
                                                        anchorDirection="right"
                                                    />
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>                    
                        </Card>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(null, mapDispatchToProps)(TodoInput);