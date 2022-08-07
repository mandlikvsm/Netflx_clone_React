import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'
import logo from '../../Images/logo.png'
import { ImSearch } from 'react-icons/im'

const Header = () => {
   
  return (
      <nav className="header">
          <img src={logo} alt="Logo" />

          <div>
              
          <Link to="/">TV Shows</Link>
          <Link to="/">Movies</Link>
          <Link to="/">Recently Added</Link>
          <Link to="/">My List</Link>

          </div>



          <ImSearch></ImSearch>
          
    </nav>
  )
}

export default Header