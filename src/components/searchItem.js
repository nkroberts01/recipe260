import React from 'react'

function SearchItem({ recipeName, image, ingredients, directions }) {
  return (
    <div className='searchItem'>
        <div style={{ background: `url(${image})` }}> </div>
        <h1> {recipeName} </h1>
        <p> {ingredients} </p>
        <p> {directions} </p>
    </div>
  )
}

export default SearchItem