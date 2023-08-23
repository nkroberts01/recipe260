import React from 'react'
import { searchList } from "../helpers/searchlist"
import SearchItem from '../components/searchItem';
import '../styles/search.css'

function search() {
  return (
    <div className='search'>
        <h1 className='searchTitle'> Search </h1>
        <div className='searchList'>{searchList.map((searchItem, key) => {
            return <SearchItem 
            key={key}
            recipeName={searchItem.recipeName} 
            image={searchItem.image} 
            ingredients={searchItem.ingredients} 
            directions={searchItem.directions} 
            />
        })}
        </div>
    </div>
  )
}

export default search