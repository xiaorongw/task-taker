import React from 'react';
import TodoInput from './TodoInputComponent';
import Header from './HeaderComponent';
import TodoList from './TodoListComponent';

const Main = () => {
    return (
        <div>
            {/* <Header /> */}
            <TodoInput />
            <TodoList />
        </div>
    );
}

export default Main;