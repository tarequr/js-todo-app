import React from 'react'
import style from './todos.module.css'
import Todo from './Todo';

function Todos(props) {
    const { todos } = props;

    return (
        <section className={ style.todos }>
            { todos.map((todo) => (
                <Todo key={todo.id} todo={todo.todo} id={todo.id} onRemoveItem={props.onRemoveTodo} />
            ))}
        </section>
    )
}

export default Todos