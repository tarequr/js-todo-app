import React, { useState } from 'react'
import style from './newTodo.module.css'

function NewTodo(props) {
    const [todo, setTodo] =  useState({ title: "", description: ""});
    const { title, description } = todo; //distructring

    const handleChange = (event) => {
        let tagName = event.target.name;

        setTodo((oldTodo) => {
            return { ...oldTodo, [tagName]: event.target.value }
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({ title: "", description: "" }); //rest input filed
    }

    return (
        <form className={ style.form } onSubmit={ handleSubmit }>
            <div className={ style["form-field"] }>
                <label htmlFor="title">Title: </label>
                <input type="text" id='title' name='title' value={title} onChange={handleChange} />
            </div>
            <div className={ style["form-field"] }>
                <label htmlFor="description">Description: </label>
                <textarea name="description" id="description" value={description} onChange={handleChange}></textarea>
            </div>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo