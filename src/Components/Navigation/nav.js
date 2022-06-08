import React from 'react';
import { Link } from 'react-router-dom';
import loogo from './userimage.png';




const Nav = () => {
  return (
    
    <nav className='main--nav'>
    <ul className='nav--list'>
    <li className='nav-item'>Covenant University Academic Session 2021/2022</li> 
    <li className='nav-item'>User<Link to='/About'><img className='logo' src={loogo} alt='logo' /></Link></li> 
</ul>

    </nav>
  )
}

export default Nav