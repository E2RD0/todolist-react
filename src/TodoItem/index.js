import React from "react";
import './TodoItem.scss';

const TodoItem = (props) => {

    return (
        <li className={`${props.completed && 'completed'}`}>
            <span className="check-button action" onClick={props.onComplete}>
            ✔
            </span>
            <label>
                <span>{props.title}</span>
            </label>
            <span className="del-button action" onClick={props.onDelete}>
            X
            </span>
        </li>
    );
}

export {TodoItem};