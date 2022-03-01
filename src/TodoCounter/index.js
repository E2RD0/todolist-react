import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

const TodoCounter = () => {
    const {totalTodos, nCompletedTodos} = React.useContext(TodoContext);

    return(
        <>
        <h1 className="title">Todo List</h1>
        <h2 className="counter">You've completed {nCompletedTodos} of {totalTodos} items</h2>
        </>
    );
}

export {TodoCounter};

