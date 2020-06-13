import React, {useState} from 'react';
import {Card, Button, Input} from 'reactstrap';

const TodoInput = () => {
    const [task, setTask] = useState('');
    return(
        <div className='container'>
            <div className='row'>
                <div className='col d-flex justify-content-start today'>
                    <h2>Today</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Card body style={{backgroundColor:'rgb(193, 192, 175)', borderColor: 'rgb(193, 192, 175)', marginTop:'20px'}}>
                        {/* <CardText>Task of the day</CardText> */}
                        <div className='row'>
                            <div className='col'>
                                <Input type='text' placeholder='Task of the day' value={task} onChange/>
                            </div>
                        </div>
                        <div className='row' style={{marginTop:'10px'}}>
                            <div className='col d-flex justify-content-start'>
                                <Button className='task-button' onClick={() => alert('submitted')}>Add Task</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>

    )
}

export default TodoInput;