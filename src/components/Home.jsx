import React, { useState } from 'react'
import uuid from 'react-uuid';

import style from './home.module.css'
import Todos from './Todos';
import NewTodo from './NewTodo';

function Home() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuid(), todo}];
        })
    }

    const handleRemoveTodo = (id) => {
        // console.log(id);
        setTodos((prevTodos) => {
            const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
            return filteredTodos;
        });
    }

    return (
        <div className={style.container}>
            <h1 style={{ color: "white" }}>Todo App</h1>
            
            <NewTodo onAddTodo={handleAddTodo} />
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
        </div>
    )
}

export default Home