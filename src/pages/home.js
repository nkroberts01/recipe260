import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/ex1.png'
import '../styles/home.css'

function home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${background})` }}>
        <div className='headerContainer'>
            <h1> Recipes260 </h1>
            <p> Your go-to website for delicious recipes and culinary inspiration! </p>
            <Link to='/search'>
                <button> Search </button>
            </Link>
        </div>
    </div>
  )
}

export default home