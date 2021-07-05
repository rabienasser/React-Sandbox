import React from 'react'

function Todo({ text, id }) {
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className='complete-btn'><i className="fas fa-check"></i></button>
            <button className='trash-btn'><i className="fa fa-trash"></i></button>
        </div>
    )
}

export default Todo
