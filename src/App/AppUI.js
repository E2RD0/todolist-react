import React from "react";
import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateToDoInput } from "../CreateToDoInput";
import {TodoContext} from '../TodoContext';
import { Modal } from "../Modal";
import {TodoSkeleton} from '../TodoSkeleton';

function AppUI() {
  const {loading, error, checkTodo, deleteTodo, todoItemsFiltered, totalTodos, openModal, setOpenModal} = React.useContext(TodoContext);
  
  const [modalContent, setModalContent] = React.useState();
  
  const toggleModal = (content) => {
    if(!content){
      setModalContent(undefined);
      setOpenModal(false);
    }
    else{
      setOpenModal( (prevValue) => !prevValue);
      setModalContent(content);
    }
    
  }
  const confirmDeleteTodo = (title, id) =>{
    toggleModal(
      <div className="deleteBox">
        <p>Are you sure you want to delete {title}?</p>
        <button onClick={()=>{deleteTodo(id); toggleModal(false);}}>
        Yes
        </button>
        <button onClick={()=>toggleModal(false)}>
        No
        </button>
      </div>
    );
  }
  return (
    <div className="main-container">
      <TodoCounter />

      <TodoSearch />
        <TodoList>

        {loading && <TodoSkeleton className="prueba"/>}
        {error && <p>There was an error</p>}
        {(!loading && !totalTodos) && <p>Please create your first to-do </p>}
        {(!loading && !todoItemsFiltered.length && !!totalTodos) && <p>We can't find any to-do that matches your search.</p>}

        {todoItemsFiltered.map((todo) => 
        {  return( 
          <TodoItem 
            key={todo.id} 
            title={todo.title} 
            completed={todo.completed} 
            onComplete={()=>checkTodo(todo.id)}
            onDelete={()=>confirmDeleteTodo(todo.title, todo.id)}
          />)
        })}
        </TodoList>

      <CreateToDoInput />

      {(!!openModal &&  modalContent) &&
      <Modal>
        {modalContent}
      </Modal>
      }
    </div>
  );
}

export { AppUI };