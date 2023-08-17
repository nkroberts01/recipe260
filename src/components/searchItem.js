import React from 'react'

function SearchItem({ recipeName, image, ingredients, directions }) {
  return (
    <div className='searchItem'>
        <h1> {recipeName} </h1>
        <p> {image} </p>
        <p> {ingredients} </p>
        <p> {directions} </p>
    </div>
  )
}

export default SearchItem