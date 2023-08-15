import React from 'react'
import Logo from '../assets/mocklogo.png'
import { Link } from 'react-router-dom'
import '../styles/navbar.css';

function navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo}/>
        </div>
        <div className='rightSide'>
            <Link to='/'> Home </Link>
            <Link to='/explore'> Explore </Link>
            <Link to='/account'> Account </Link>
        </div>
    </div>
  )
}

export default navbar