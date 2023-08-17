import React from 'react'
import { searchList } from "../helpers/searchlist"

function search() {
  return (
    <div className='search'>
        <h1 className='searchTitle'> Search </h1>
        <div className='searchList'>{searchList.map((searchItem, key) => {
            return <div> {searchItem.ingredients} </div>;
        })}</div>
    </div>
  )
}

export default search