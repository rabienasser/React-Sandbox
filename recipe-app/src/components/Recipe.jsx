import React from 'react'

import './recipe.style.css'

function Recipe({ title, calories, image, ingredients }) {
    return (
        <div className='recipe'>
            <h1>{title}</h1>
            <ol>
                {
                    ingredients.map(ing => (
                        <li>{ing.text}</li>
                    ))
                }
            </ol>
            <p>Total Calories: {calories.toFixed(0)}</p>
            <img src={image} alt={title} />
        </div>
    )
}

export default Recipe