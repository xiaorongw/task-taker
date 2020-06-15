import React from 'react';
import TodoInput from './TodoInputComponent';
import Header from './HeaderComponent';
import TodoList from './TodoListComponent';
import Tab from './TabComponent';

const Main = () => {
    return (
        <div>   
            <TodoInput />
            <Tab />
            {/* <TodoList />             */}
        </div>
    );
}

export default Main;