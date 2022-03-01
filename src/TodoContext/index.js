import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { nanoid } from 'nanoid'

const TodoContext = React.createContext();

const TodoProvider = (props) => {

    const {
        item: todoItems,
        saveItem: saveTodos,
        loading,
        error
      }= useLocalStorage('Todos_V1', []);
    
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(false);
    
      const nCompletedTodos = todoItems.filter(todo => !!todo.completed).length;
      const totalTodos = todoItems.length;
    
      const todoItemsFiltered = todoItems.filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()));
      
      const addTodo = (title) => {
        const todoList = [...todoItems];
        todoList.push({
            id: nanoid(10),
            title,
            completed: false
        });
        saveTodos(todoList);
      }
      const checkTodo= (id) => {
        const newTodos = [...todoItems];
        const todoIndex = newTodos.findIndex(todo => todo.id === id);
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      };
    
      const deleteTodo= (id) => {
        const todoIndex = todoItems.findIndex(todo => todo.id === id);
        const newTodos = [...todoItems];
        if (todoIndex > -1) {
          newTodos.splice(todoIndex, 1);
          saveTodos(newTodos);
        }
      };
    
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            nCompletedTodos,
            searchValue,
            setSearchValue,
            todoItemsFiltered,
            addTodo,
            checkTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
};

export { TodoProvider, TodoContext };