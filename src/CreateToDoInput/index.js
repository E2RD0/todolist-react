import React from "react";
import './CreateToDoInput.css';
import {TodoContext} from '../TodoContext';

const CreateToDoInput = () => {
    const {addTodo} = React.useContext(TodoContext);
    const[inputValue, setInputValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(inputValue);
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit} className="container-input">
            <input required onInput={(e)=>setInputValue(e.target.value)} value={inputValue} className="input" type="text" placeholder="Add a new todo" />
            <button type="submit" className="createButton">{">>"}</button>
        </form>
    );
}

export {CreateToDoInput};
